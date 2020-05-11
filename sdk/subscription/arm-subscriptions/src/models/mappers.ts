/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { CloudErrorMapper, BaseResourceMapper } from "@azure/ms-rest-azure-js";
import * as msRest from "@azure/ms-rest-js";

export const CloudError = CloudErrorMapper;
export const BaseResource = BaseResourceMapper;

export const Location: msRest.CompositeMapper = {
  serializedName: "Location",
  type: {
    name: "Composite",
    className: "Location",
    modelProperties: {
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      subscriptionId: {
        readOnly: true,
        serializedName: "subscriptionId",
        type: {
          name: "String"
        }
      },
      name: {
        readOnly: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      displayName: {
        readOnly: true,
        serializedName: "displayName",
        type: {
          name: "String"
        }
      },
      latitude: {
        readOnly: true,
        serializedName: "latitude",
        type: {
          name: "String"
        }
      },
      longitude: {
        readOnly: true,
        serializedName: "longitude",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SubscriptionPolicies: msRest.CompositeMapper = {
  serializedName: "SubscriptionPolicies",
  type: {
    name: "Composite",
    className: "SubscriptionPolicies",
    modelProperties: {
      locationPlacementId: {
        readOnly: true,
        serializedName: "locationPlacementId",
        type: {
          name: "String"
        }
      },
      quotaId: {
        readOnly: true,
        serializedName: "quotaId",
        type: {
          name: "String"
        }
      },
      spendingLimit: {
        readOnly: true,
        serializedName: "spendingLimit",
        type: {
          name: "Enum",
          allowedValues: [
            "On",
            "Off",
            "CurrentPeriodOff"
          ]
        }
      }
    }
  }
};

export const Subscription: msRest.CompositeMapper = {
  serializedName: "Subscription",
  type: {
    name: "Composite",
    className: "Subscription",
    modelProperties: {
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      subscriptionId: {
        readOnly: true,
        serializedName: "subscriptionId",
        type: {
          name: "String"
        }
      },
      displayName: {
        readOnly: true,
        serializedName: "displayName",
        type: {
          name: "String"
        }
      },
      state: {
        readOnly: true,
        serializedName: "state",
        type: {
          name: "Enum",
          allowedValues: [
            "Enabled",
            "Warned",
            "PastDue",
            "Disabled",
            "Deleted"
          ]
        }
      },
      subscriptionPolicies: {
        serializedName: "subscriptionPolicies",
        type: {
          name: "Composite",
          className: "SubscriptionPolicies"
        }
      },
      authorizationSource: {
        serializedName: "authorizationSource",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const TenantIdDescription: msRest.CompositeMapper = {
  serializedName: "TenantIdDescription",
  type: {
    name: "Composite",
    className: "TenantIdDescription",
    modelProperties: {
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      tenantId: {
        readOnly: true,
        serializedName: "tenantId",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ErrorResponse: msRest.CompositeMapper = {
  serializedName: "ErrorResponse",
  type: {
    name: "Composite",
    className: "ErrorResponse",
    modelProperties: {
      code: {
        serializedName: "code",
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CanceledSubscriptionId: msRest.CompositeMapper = {
  serializedName: "CanceledSubscriptionId",
  type: {
    name: "Composite",
    className: "CanceledSubscriptionId",
    modelProperties: {
      value: {
        readOnly: true,
        serializedName: "value",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const RenamedSubscriptionId: msRest.CompositeMapper = {
  serializedName: "RenamedSubscriptionId",
  type: {
    name: "Composite",
    className: "RenamedSubscriptionId",
    modelProperties: {
      value: {
        readOnly: true,
        serializedName: "value",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const EnabledSubscriptionId: msRest.CompositeMapper = {
  serializedName: "EnabledSubscriptionId",
  type: {
    name: "Composite",
    className: "EnabledSubscriptionId",
    modelProperties: {
      value: {
        readOnly: true,
        serializedName: "value",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SubscriptionName: msRest.CompositeMapper = {
  serializedName: "SubscriptionName",
  type: {
    name: "Composite",
    className: "SubscriptionName",
    modelProperties: {
      subscriptionName: {
        serializedName: "subscriptionName",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OperationDisplay: msRest.CompositeMapper = {
  serializedName: "Operation_display",
  type: {
    name: "Composite",
    className: "OperationDisplay",
    modelProperties: {
      provider: {
        serializedName: "provider",
        type: {
          name: "String"
        }
      },
      resource: {
        serializedName: "resource",
        type: {
          name: "String"
        }
      },
      operation: {
        serializedName: "operation",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Operation: msRest.CompositeMapper = {
  serializedName: "Operation",
  type: {
    name: "Composite",
    className: "Operation",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      display: {
        serializedName: "display",
        type: {
          name: "Composite",
          className: "OperationDisplay"
        }
      }
    }
  }
};

export const OperationListResult: msRest.CompositeMapper = {
  serializedName: "OperationListResult",
  type: {
    name: "Composite",
    className: "OperationListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Operation"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AdPrincipal: msRest.CompositeMapper = {
  serializedName: "AdPrincipal",
  type: {
    name: "Composite",
    className: "AdPrincipal",
    modelProperties: {
      objectId: {
        required: true,
        serializedName: "objectId",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SubscriptionCreationResult: msRest.CompositeMapper = {
  serializedName: "SubscriptionCreationResult",
  type: {
    name: "Composite",
    className: "SubscriptionCreationResult",
    modelProperties: {
      subscriptionLink: {
        serializedName: "subscriptionLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SubscriptionCreationParameters: msRest.CompositeMapper = {
  serializedName: "SubscriptionCreationParameters",
  type: {
    name: "Composite",
    className: "SubscriptionCreationParameters",
    modelProperties: {
      displayName: {
        serializedName: "displayName",
        type: {
          name: "String"
        }
      },
      managementGroupId: {
        serializedName: "managementGroupId",
        type: {
          name: "String"
        }
      },
      owners: {
        serializedName: "owners",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "AdPrincipal"
            }
          }
        }
      },
      offerType: {
        serializedName: "offerType",
        type: {
          name: "String"
        }
      },
      additionalParameters: {
        serializedName: "additionalParameters",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "Object"
            }
          }
        }
      }
    }
  }
};

export const ModernSubscriptionCreationParameters: msRest.CompositeMapper = {
  serializedName: "ModernSubscriptionCreationParameters",
  type: {
    name: "Composite",
    className: "ModernSubscriptionCreationParameters",
    modelProperties: {
      displayName: {
        required: true,
        serializedName: "displayName",
        type: {
          name: "String"
        }
      },
      skuId: {
        required: true,
        serializedName: "skuId",
        type: {
          name: "String"
        }
      },
      costCenter: {
        serializedName: "costCenter",
        type: {
          name: "String"
        }
      },
      owner: {
        serializedName: "owner",
        type: {
          name: "Composite",
          className: "AdPrincipal"
        }
      },
      managementGroupId: {
        serializedName: "managementGroupId",
        type: {
          name: "String"
        }
      },
      additionalParameters: {
        serializedName: "additionalParameters",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "Object"
            }
          }
        }
      }
    }
  }
};

export const ModernCspSubscriptionCreationParameters: msRest.CompositeMapper = {
  serializedName: "ModernCspSubscriptionCreationParameters",
  type: {
    name: "Composite",
    className: "ModernCspSubscriptionCreationParameters",
    modelProperties: {
      displayName: {
        required: true,
        serializedName: "displayName",
        type: {
          name: "String"
        }
      },
      skuId: {
        required: true,
        serializedName: "skuId",
        type: {
          name: "String"
        }
      },
      resellerId: {
        serializedName: "resellerId",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SubscriptionCreateSubscriptionInEnrollmentAccountHeaders: msRest.CompositeMapper = {
  serializedName: "subscription-createsubscriptioninenrollmentaccount-headers",
  type: {
    name: "Composite",
    className: "SubscriptionCreateSubscriptionInEnrollmentAccountHeaders",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SubscriptionOperationGetHeaders: msRest.CompositeMapper = {
  serializedName: "subscriptionoperation-get-headers",
  type: {
    name: "Composite",
    className: "SubscriptionOperationGetHeaders",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const SubscriptionCreateSubscriptionHeaders: msRest.CompositeMapper = {
  serializedName: "subscription-createsubscription-headers",
  type: {
    name: "Composite",
    className: "SubscriptionCreateSubscriptionHeaders",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const SubscriptionCreateCspSubscriptionHeaders: msRest.CompositeMapper = {
  serializedName: "subscription-createcspsubscription-headers",
  type: {
    name: "Composite",
    className: "SubscriptionCreateCspSubscriptionHeaders",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const LocationListResult: msRest.CompositeMapper = {
  serializedName: "LocationListResult",
  type: {
    name: "Composite",
    className: "LocationListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Location"
            }
          }
        }
      }
    }
  }
};

export const SubscriptionListResult: msRest.CompositeMapper = {
  serializedName: "SubscriptionListResult",
  type: {
    name: "Composite",
    className: "SubscriptionListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Subscription"
            }
          }
        }
      },
      nextLink: {
        required: true,
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const TenantListResult: msRest.CompositeMapper = {
  serializedName: "TenantListResult",
  type: {
    name: "Composite",
    className: "TenantListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "TenantIdDescription"
            }
          }
        }
      },
      nextLink: {
        required: true,
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};
