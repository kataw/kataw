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
    "kind": 2243,
    "source": "import * as React from \"react\";\nclass TestComponent extends React.Component<{ isAny: <T>(obj: any) => obj is T }> {\n    static defaultProps = {\n        isAny: TestComponent.isAny\n    }\n\n    // Type guard is defined as a static class property\n    static isAny<T>(obj: any): obj is T {\n        return true;\n    }\n}\n\nconst TestRender = () => <TestComponent />;",
    "filename": "",
    "statements": [
        {
            "kind": 110,
            "fromClause": {
                "kind": 4261583,
                "text": "react",
                "rawText": "react",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 22,
                "end": 30
            },
            "moduleSpecifier": null,
            "importClause": {
                "kind": 109,
                "defaultBinding": null,
                "nameSpaceImport": {
                    "kind": 131102,
                    "text": "React",
                    "rawText": "React",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 1025,
                    "start": 11,
                    "end": 17
                },
                "namedImports": null,
                "isTypeOnly": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 6,
                "end": 17
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 31
        },
        {
            "kind": 48,
            "name": {
                "kind": 131102,
                "text": "TestComponent",
                "rawText": "TestComponent",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 37,
                "end": 51
            },
            "typeParameters": null,
            "classHeritage": {
                "kind": 52,
                "expression": {
                    "kind": 67175096,
                    "member": {
                        "kind": 196712,
                        "text": "React",
                        "rawText": "React",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 59,
                        "end": 65
                    },
                    "expression": {
                        "kind": 196711,
                        "text": "Component",
                        "rawText": "Component",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 66,
                        "end": 75
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 65,
                    "end": 75,
                    "period": {
                        "kind": 255,
                        "pos": 65,
                        "end": 66
                    }
                },
                "typeArguments": {
                    "kind": 8419,
                    "typeArgumentsList": [
                        {
                            "kind": 536879334,
                            "objectTypeMembers": {
                                "kind": 536871081,
                                "members": [
                                    {
                                        "kind": 8380,
                                        "name": {
                                            "kind": 196711,
                                            "text": "isAny",
                                            "rawText": "isAny",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 77,
                                            "end": 83
                                        },
                                        "isOptional": false,
                                        "accessModifier": null,
                                        "type": {
                                            "kind": 8287,
                                            "typeParameters": {
                                                "kind": 134226153,
                                                "typeParameterList": [
                                                    {
                                                        "kind": 134226152,
                                                        "name": {
                                                            "kind": 196711,
                                                            "text": "T",
                                                            "rawText": "T",
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 86,
                                                            "end": 87
                                                        },
                                                        "constraint": null,
                                                        "defaultType": null,
                                                        "expression": null,
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 2097152,
                                                        "start": 86,
                                                        "end": 87
                                                    }
                                                ],
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 2097152,
                                                "start": 86,
                                                "end": 87
                                            },
                                            "parameters": {
                                                "kind": 134226095,
                                                "parameterList": [
                                                    {
                                                        "kind": 134226094,
                                                        "ellipsis": false,
                                                        "binding": {
                                                            "kind": 131102,
                                                            "text": "obj",
                                                            "rawText": "obj",
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 1025,
                                                            "start": 89,
                                                            "end": 92
                                                        },
                                                        "isOptional": false,
                                                        "type": {
                                                            "kind": 4202498,
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 2097152,
                                                            "start": 93,
                                                            "end": 97
                                                        },
                                                        "initializer": null,
                                                        "accessModifier": null,
                                                        "isReadOnly": false,
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 1,
                                                        "start": 89,
                                                        "end": 97
                                                    }
                                                ],
                                                "trailingcomma": false,
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 2097152,
                                                "start": 89,
                                                "end": 97
                                            },
                                            "returnType": {
                                                "kind": 8426,
                                                "asserts": false,
                                                "parameterName": {
                                                    "kind": 196712,
                                                    "text": "obj",
                                                    "rawText": "obj",
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 101,
                                                    "end": 105
                                                },
                                                "type": {
                                                    "kind": 134226156,
                                                    "typeName": {
                                                        "kind": 196711,
                                                        "text": "T",
                                                        "rawText": "T",
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 108,
                                                        "end": 110
                                                    },
                                                    "typeArguments": null,
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 2097152,
                                                    "start": 108,
                                                    "end": 112
                                                },
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 2097152,
                                                "start": 101,
                                                "end": 110
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 84,
                                            "end": 110
                                        },
                                        "isStatic": false,
                                        "isReadOnly": false,
                                        "initializer": null,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 2097152,
                                        "start": 77,
                                        "end": 110
                                    }
                                ],
                                "multiline": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 77,
                                "end": 112
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 76,
                            "end": 112
                        }
                    ],
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 2097152,
                    "start": 76,
                    "end": 112
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 59,
                "end": 113
            },
            "implementClauses": null,
            "members": {
                "kind": 50,
                "elements": [
                    {
                        "kind": 16468,
                        "key": {
                            "kind": 196711,
                            "text": "defaultProps",
                            "rawText": "defaultProps",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 126,
                            "end": 139
                        },
                        "isInKeyword": false,
                        "expression": null,
                        "isAbstract": false,
                        "isReadOnly": false,
                        "isOptional": false,
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 98984,
                            "propertyList": {
                                "kind": 65722,
                                "properties": [
                                    {
                                        "kind": 65721,
                                        "left": {
                                            "kind": 196711,
                                            "text": "isAny",
                                            "rawText": "isAny",
                                            "flags": 32768,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 143,
                                            "end": 157
                                        },
                                        "right": {
                                            "kind": 67175096,
                                            "member": {
                                                "kind": 196712,
                                                "text": "TestComponent",
                                                "rawText": "TestComponent",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 158,
                                                "end": 172
                                            },
                                            "expression": {
                                                "kind": 196711,
                                                "text": "isAny",
                                                "rawText": "isAny",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 173,
                                                "end": 178
                                            },
                                            "flags": 32768,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 172,
                                            "end": 178,
                                            "period": {
                                                "kind": 255,
                                                "pos": 172,
                                                "end": 173
                                            }
                                        },
                                        "accessModifier": null,
                                        "decorators": null,
                                        "flags": 32768,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 143,
                                        "end": 178
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": true,
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 143,
                                "end": 178
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 141,
                            "end": 184
                        },
                        "decorators": null,
                        "accessModifier": null,
                        "isStatic": true,
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 524352,
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
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 252,
                                "end": 258
                            },
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [
                                    {
                                        "kind": 16473,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "obj",
                                            "rawText": "obj",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 262,
                                            "end": 265
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 4202498,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 266,
                                            "end": 270
                                        },
                                        "initializer": null,
                                        "decorators": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1,
                                        "start": 262,
                                        "end": 270
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
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
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 298,
                                                "end": 303
                                            },
                                            "flags": 32768,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 283,
                                            "end": 304
                                        }
                                    ],
                                    "multiline": true,
                                    "flags": 32768,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 283,
                                    "end": 304
                                },
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 281,
                                "end": 310
                            },
                            "decorators": null,
                            "type": {
                                "kind": 8426,
                                "asserts": false,
                                "parameterName": {
                                    "kind": 196712,
                                    "text": "obj",
                                    "rawText": "obj",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 272,
                                    "end": 276
                                },
                                "type": {
                                    "kind": 134226156,
                                    "typeName": {
                                        "kind": 196711,
                                        "text": "T",
                                        "rawText": "T",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 279,
                                        "end": 281
                                    },
                                    "typeArguments": null,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 2097152,
                                    "start": 279,
                                    "end": 283
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 272,
                                "end": 281
                            },
                            "accessModifier": null,
                            "typeParameters": {
                                "kind": 134226153,
                                "typeParameterList": [
                                    {
                                        "kind": 134226152,
                                        "name": {
                                            "kind": 196711,
                                            "text": "T",
                                            "rawText": "T",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 259,
                                            "end": 260
                                        },
                                        "constraint": null,
                                        "defaultType": null,
                                        "expression": null,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 2097152,
                                        "start": 259,
                                        "end": 260
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 259,
                                "end": 260
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 258,
                            "end": 310
                        },
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 184,
                        "end": 310
                    }
                ],
                "flags": 32768,
                "symbol": null,
                "transformFlags": 1,
                "start": 115,
                "end": 312
            },
            "decorators": null,
            "isAbstract": false,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 1,
            "start": 31,
            "end": 312
        },
        {
            "kind": 142,
            "binding": {
                "kind": 31,
                "lexicals": [
                    {
                        "kind": 16525,
                        "binding": {
                            "kind": 131102,
                            "text": "TestRender",
                            "rawText": "TestRender",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 319,
                            "end": 330
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 83976,
                            "typeParameters": null,
                            "parameters": {
                                "kind": 81929,
                                "elements": [],
                                "type": null,
                                "accessModifier": null,
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 332,
                                "end": 332
                            },
                            "contents": {
                                "kind": 69766,
                                "tagName": {
                                    "kind": 129,
                                    "text": "TestComponent",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 8192,
                                    "start": 340,
                                    "end": 353
                                },
                                "attributes": {
                                    "kind": 123,
                                    "attributesList": [],
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 8192,
                                    "start": 353,
                                    "end": 353
                                },
                                "typeArguments": null,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 8192,
                                "start": 338,
                                "end": 356
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 332,
                            "end": 356
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 319,
                        "end": 356
                    }
                ],
                "flags": 40,
                "symbol": null,
                "transformFlags": 0,
                "start": 312,
                "end": 356
            },
            "flags": 32776,
            "symbol": null,
            "transformFlags": 769,
            "start": 312,
            "end": 357
        }
    ],
    "isModule": true,
    "printable": true,
    "diagnostics": [],
    "original": null,
    "symbol": null,
    "flags": 0,
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

