# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````


## Input

`````js
import * as React from "react";
class TestComponent extends React.Component<{ isAny: <T>(obj: any) => obj is T }> {
    static defaultProps = {
        isAny: TestComponent.isAny
    }

    // Type guard is defined as a static class property
    static isAny<T>(obj: any): obj is T {
        return true;
    }
}

const TestRender = () => <TestComponent />;
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 149,
    "source": "import * as React from \"react\";\nclass TestComponent extends React.Component<{ isAny: <T>(obj: any) => obj is T }> {\n    static defaultProps = {\n        isAny: TestComponent.isAny\n    }\n\n    // Type guard is defined as a static class property\n    static isAny<T>(obj: any): obj is T {\n        return true;\n    }\n}\n\nconst TestRender = () => <TestComponent />;",
    "filename": "",
    "moduleBody": {
        "kind": 150,
        "statements": [
            {
                "kind": 110,
                "fromClause": {
                    "kind": 67279,
                    "text": "react",
                    "rawText": "react",
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 22,
                    "end": 30
                },
                "moduleSpecifier": null,
                "importClause": {
                    "kind": 109,
                    "nameSpaceImport": {
                        "kind": 131102,
                        "text": "React",
                        "rawText": "React",
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 1025,
                        "parent": null,
                        "emitNode": null,
                        "start": 11,
                        "end": 17
                    },
                    "namedImports": null,
                    "isTypeOnly": false,
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 6,
                    "end": 17
                },
                "flags": 65536,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 0,
                "end": 31
            },
            {
                "kind": 48,
                "name": {
                    "kind": 131102,
                    "text": "TestComponent",
                    "rawText": "TestComponent",
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 1025,
                    "parent": null,
                    "emitNode": null,
                    "start": 37,
                    "end": 51
                },
                "typeParameters": null,
                "classHeritage": {
                    "kind": 52,
                    "expression": {
                        "kind": 74424,
                        "member": {
                            "kind": 196712,
                            "text": "React",
                            "rawText": "React",
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 59,
                            "end": 65
                        },
                        "expression": {
                            "kind": 196711,
                            "text": "Component",
                            "rawText": "Component",
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 66,
                            "end": 75
                        },
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 0,
                        "parent": null,
                        "emitNode": null,
                        "start": 65,
                        "end": 75
                    },
                    "typeArguments": {
                        "kind": 227,
                        "typeArgumentsList": [
                            {
                                "kind": 230,
                                "objectTypeMembers": {
                                    "kind": 169,
                                    "members": [
                                        {
                                            "kind": 188,
                                            "name": {
                                                "kind": 196711,
                                                "text": "isAny",
                                                "rawText": "isAny",
                                                "flags": 65536,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 77,
                                                "end": 83
                                            },
                                            "isOptional": false,
                                            "accessModifier": null,
                                            "type": {
                                                "kind": 95,
                                                "typeParameters": {
                                                    "kind": 233,
                                                    "typeParameterList": [
                                                        {
                                                            "kind": 232,
                                                            "name": {
                                                                "kind": 196711,
                                                                "text": "T",
                                                                "rawText": "T",
                                                                "flags": 65536,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "parent": null,
                                                                "emitNode": null,
                                                                "start": 86,
                                                                "end": 87
                                                            },
                                                            "constraint": null,
                                                            "defaultType": null,
                                                            "expression": null,
                                                            "flags": 65536,
                                                            "intersects": false,
                                                            "transformFlags": 2097152,
                                                            "parent": null,
                                                            "emitNode": null,
                                                            "start": 86,
                                                            "end": 87
                                                        }
                                                    ],
                                                    "flags": 65536,
                                                    "intersects": false,
                                                    "transformFlags": 2097152,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 86,
                                                    "end": 87
                                                },
                                                "parameters": {
                                                    "kind": 175,
                                                    "parameterList": [
                                                        {
                                                            "kind": 174,
                                                            "ellipsis": false,
                                                            "binding": {
                                                                "kind": 131102,
                                                                "text": "obj",
                                                                "rawText": "obj",
                                                                "flags": 65536,
                                                                "intersects": false,
                                                                "transformFlags": 1025,
                                                                "parent": null,
                                                                "emitNode": null,
                                                                "start": 89,
                                                                "end": 92
                                                            },
                                                            "isOptional": false,
                                                            "type": {
                                                                "kind": 4194306,
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 2097152,
                                                                "parent": null,
                                                                "emitNode": null,
                                                                "start": 93,
                                                                "end": 97
                                                            },
                                                            "initializer": null,
                                                            "accessModifier": null,
                                                            "isReadOnly": false,
                                                            "flags": 65536,
                                                            "intersects": false,
                                                            "transformFlags": 1,
                                                            "parent": null,
                                                            "emitNode": null,
                                                            "start": 89,
                                                            "end": 97
                                                        }
                                                    ],
                                                    "trailingcomma": false,
                                                    "flags": 65536,
                                                    "intersects": false,
                                                    "transformFlags": 2097152,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 89,
                                                    "end": 97
                                                },
                                                "returnType": {
                                                    "kind": 234,
                                                    "asserts": false,
                                                    "parameterName": {
                                                        "kind": 196712,
                                                        "text": "obj",
                                                        "rawText": "obj",
                                                        "flags": 65536,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "parent": null,
                                                        "emitNode": null,
                                                        "start": 101,
                                                        "end": 105
                                                    },
                                                    "type": {
                                                        "kind": 236,
                                                        "typeName": {
                                                            "kind": 196711,
                                                            "text": "T",
                                                            "rawText": "T",
                                                            "flags": 65536,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "parent": null,
                                                            "emitNode": null,
                                                            "start": 108,
                                                            "end": 110
                                                        },
                                                        "typeArguments": null,
                                                        "flags": 65536,
                                                        "intersects": false,
                                                        "transformFlags": 2097152,
                                                        "parent": null,
                                                        "emitNode": null,
                                                        "start": 108,
                                                        "end": 112
                                                    },
                                                    "flags": 65536,
                                                    "intersects": false,
                                                    "transformFlags": 2097152,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 101,
                                                    "end": 110
                                                },
                                                "flags": 65536,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 84,
                                                "end": 110
                                            },
                                            "isStatic": false,
                                            "isReadOnly": false,
                                            "initializer": null,
                                            "flags": 65536,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 77,
                                            "end": 110
                                        }
                                    ],
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 77,
                                    "end": 112
                                },
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 76,
                                "end": 112
                            }
                        ],
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 76,
                        "end": 112
                    },
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 59,
                    "end": 113
                },
                "implementClauses": null,
                "members": {
                    "kind": 50,
                    "elements": [
                        {
                            "kind": 84,
                            "key": {
                                "kind": 196711,
                                "text": "defaultProps",
                                "rawText": "defaultProps",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 126,
                                "end": 139
                            },
                            "isReadOnly": false,
                            "isOptional": false,
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 67224232,
                                "propertyList": {
                                    "kind": 65722,
                                    "properties": [
                                        {
                                            "kind": 65721,
                                            "left": {
                                                "kind": 196711,
                                                "text": "isAny",
                                                "rawText": "isAny",
                                                "flags": 81920,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 143,
                                                "end": 157
                                            },
                                            "right": {
                                                "kind": 74424,
                                                "member": {
                                                    "kind": 196712,
                                                    "text": "TestComponent",
                                                    "rawText": "TestComponent",
                                                    "flags": 65536,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 158,
                                                    "end": 172
                                                },
                                                "expression": {
                                                    "kind": 196711,
                                                    "text": "isAny",
                                                    "rawText": "isAny",
                                                    "flags": 65536,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 173,
                                                    "end": 178
                                                },
                                                "flags": 81920,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 172,
                                                "end": 178
                                            },
                                            "accessModifier": null,
                                            "decorators": null,
                                            "flags": 81920,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 143,
                                            "end": 178
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": true,
                                    "flags": 81920,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 143,
                                    "end": 178
                                },
                                "flags": 81920,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 141,
                                "end": 184
                            },
                            "decorators": null,
                            "accessModifier": null,
                            "isStatic": true,
                            "flags": 81920,
                            "intersects": false,
                            "transformFlags": 524352,
                            "parent": null,
                            "emitNode": null,
                            "start": 115,
                            "end": 184
                        },
                        {
                            "kind": 49,
                            "isStatic": true,
                            "isAbstract": false,
                            "isReadOnly": false,
                            "isOptional": false,
                            "method": {
                                "kind": 16844946,
                                "name": {
                                    "kind": 196711,
                                    "text": "isAny",
                                    "rawText": "isAny",
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 252,
                                    "end": 258
                                },
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [
                                        {
                                            "kind": 89,
                                            "ellipsis": false,
                                            "binding": {
                                                "kind": 131102,
                                                "text": "obj",
                                                "rawText": "obj",
                                                "flags": 65536,
                                                "intersects": false,
                                                "transformFlags": 1025,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 262,
                                                "end": 265
                                            },
                                            "isOptional": false,
                                            "type": {
                                                "kind": 4194306,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 266,
                                                "end": 270
                                            },
                                            "initializer": null,
                                            "decorators": null,
                                            "accessModifier": null,
                                            "isReadOnly": false,
                                            "flags": 65536,
                                            "intersects": false,
                                            "transformFlags": 1,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 262,
                                            "end": 270
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 262,
                                    "end": 271
                                },
                                "isSetter": false,
                                "isGetter": false,
                                "contents": {
                                    "kind": 91,
                                    "functionStatementList": {
                                        "kind": 94,
                                        "statements": [
                                            {
                                                "kind": 2097346,
                                                "expression": {
                                                    "kind": 4260391,
                                                    "text": true,
                                                    "flags": 65536,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 298,
                                                    "end": 303
                                                },
                                                "flags": 81920,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 283,
                                                "end": 304
                                            }
                                        ],
                                        "multiline": true,
                                        "flags": 81920,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 283,
                                        "end": 304
                                    },
                                    "flags": 81920,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 281,
                                    "end": 310
                                },
                                "decorators": null,
                                "type": {
                                    "kind": 234,
                                    "asserts": false,
                                    "parameterName": {
                                        "kind": 196712,
                                        "text": "obj",
                                        "rawText": "obj",
                                        "flags": 65536,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 272,
                                        "end": 276
                                    },
                                    "type": {
                                        "kind": 236,
                                        "typeName": {
                                            "kind": 196711,
                                            "text": "T",
                                            "rawText": "T",
                                            "flags": 65536,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 279,
                                            "end": 281
                                        },
                                        "typeArguments": null,
                                        "flags": 65536,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 279,
                                        "end": 283
                                    },
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 272,
                                    "end": 281
                                },
                                "accessModifier": null,
                                "typeParameters": {
                                    "kind": 233,
                                    "typeParameterList": [
                                        {
                                            "kind": 232,
                                            "name": {
                                                "kind": 196711,
                                                "text": "T",
                                                "rawText": "T",
                                                "flags": 65536,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 259,
                                                "end": 260
                                            },
                                            "constraint": null,
                                            "defaultType": null,
                                            "expression": null,
                                            "flags": 65536,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 259,
                                            "end": 260
                                        }
                                    ],
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 259,
                                    "end": 260
                                },
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 258,
                                "end": 310
                            },
                            "flags": 81920,
                            "intersects": false,
                            "transformFlags": 1,
                            "parent": null,
                            "emitNode": null,
                            "start": 184,
                            "end": 310
                        }
                    ],
                    "flags": 81920,
                    "intersects": false,
                    "transformFlags": 1,
                    "parent": null,
                    "emitNode": null,
                    "start": 115,
                    "end": 312
                },
                "decorators": null,
                "flags": 81920,
                "intersects": false,
                "transformFlags": 1,
                "parent": null,
                "emitNode": null,
                "start": 31,
                "end": 312
            },
            {
                "kind": 142,
                "isConst": true,
                "binding": {
                    "kind": 31,
                    "bindingList": [
                        {
                            "kind": 141,
                            "binding": {
                                "kind": 131102,
                                "text": "TestRender",
                                "rawText": "TestRender",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 1025,
                                "parent": null,
                                "emitNode": null,
                                "start": 319,
                                "end": 330
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 67592,
                                "arrowParameters": {
                                    "kind": 65545,
                                    "typeParameters": 1,
                                    "elements": [],
                                    "type": null,
                                    "accessModifier": null,
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 332,
                                    "end": 332
                                },
                                "contents": {
                                    "kind": 69766,
                                    "tagName": {
                                        "kind": 129,
                                        "text": "TestComponent",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 8192,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 340,
                                        "end": 353
                                    },
                                    "attributes": {
                                        "kind": 123,
                                        "attributesList": [],
                                        "flags": 65536,
                                        "intersects": false,
                                        "transformFlags": 8192,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 353,
                                        "end": 353
                                    },
                                    "typeArguments": null,
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 8192,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 338,
                                    "end": 356
                                },
                                "flags": 536936448,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 332,
                                "end": 356
                            },
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 319,
                            "end": 356
                        }
                    ],
                    "flags": 65552,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 319,
                    "end": 356
                },
                "flags": 81936,
                "intersects": false,
                "transformFlags": 769,
                "parent": null,
                "emitNode": null,
                "start": 312,
                "end": 357
            }
        ],
        "transformFlags": 0,
        "flags": 65536,
        "intersects": false,
        "parent": null,
        "emitNode": null,
        "start": 0,
        "end": 357
    },
    "jsx": true,
    "printable": true,
    "diagnostics": [],
    "parent": null,
    "emitNode": null,
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 357
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

