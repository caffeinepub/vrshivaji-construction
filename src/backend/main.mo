import Principal "mo:core/Principal";
import Map "mo:core/Map";
import Time "mo:core/Time";
import Runtime "mo:core/Runtime";
import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";

actor {
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  type InquiryId = Nat;

  public type Inquiry = {
    id : InquiryId;
    name : Text;
    email : Text;
    message : Text;
    timestamp : Time.Time;
  };

  public type UserProfile = {
    name : Text;
  };

  let inquiries = Map.empty<InquiryId, Inquiry>();
  var nextId : InquiryId = 0;
  let userProfiles = Map.empty<Principal, UserProfile>();

  // Public contact form submission - accessible to everyone including guests
  public shared ({ caller }) func submitInquiry(name : Text, email : Text, message : Text) : async Inquiry {
    if (name == "" or email == "" or message == "") {
      Runtime.trap("All fields are required");
    };

    let newInquiry : Inquiry = {
      id = nextId;
      name;
      email;
      message;
      timestamp = Time.now();
    };

    inquiries.add(nextId, newInquiry);
    nextId += 1;
    newInquiry;
  };

  // Admin-only function to retrieve all inquiries
  public query ({ caller }) func getAllInquiries() : async [Inquiry] {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can access all inquiries");
    };
    inquiries.values().toArray();
  };

  // User profile management functions
  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can access profiles");
    };
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };
};
