# Kataw parser test case

## Input

`````js
type A = (
  this: | SupperLongLongLongLongLongLongLongLongLongLongLongType | FooBarBazLorem12345,
  b: number,
) => boolean;

type B = (
  _this: | SupperLongLongLongLongLongLongLongLongLongLongLongType | FooBarBazLorem12345,
  b: number,
) => boolean

`````

## Options

`````js
{ allowTypes : true }
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "transformFlags": 0,
                "start": 0,
                "end": 4
            },
            "name": {
                "kind": 134299649,
                "text": "A",
                "rawText": "A",
                "flags": 96,
                "transformFlags": 0,
                "start": 4,
                "end": 6
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "transformFlags": 0,
                "start": 6,
                "end": 8
            },
            "type": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 288,
                    "typeParameters": null,
                    "arrowTypeParameterList": {
                        "kind": 292,
                        "parameters": [
                            {
                                "kind": 284,
                                "ellipsisToken": null,
                                "name": {
                                    "kind": 134299649,
                                    "text": "this",
                                    "rawText": "this",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 10,
                                    "end": 17
                                },
                                "optionalToken": null,
                                "types": {
                                    "kind": 139,
                                    "bitwiseOrToken": {
                                        "kind": 134251592,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 18,
                                        "end": 20
                                    },
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 137,
                                        "types": [
                                            {
                                                "kind": 144,
                                                "typeName": {
                                                    "kind": 134299649,
                                                    "text": "SupperLongLongLongLongLongLongLongLongLongLongLongType",
                                                    "rawText": "SupperLongLongLongLongLongLongLongLongLongLongLongType",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 20,
                                                    "end": 75
                                                },
                                                "typeParameters": null,
                                                "flags": 2097152,
                                                "transformFlags": 0,
                                                "start": 20,
                                                "end": 75
                                            },
                                            {
                                                "kind": 144,
                                                "typeName": {
                                                    "kind": 134299649,
                                                    "text": "FooBarBazLorem12345",
                                                    "rawText": "FooBarBazLorem12345",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 77,
                                                    "end": 97
                                                },
                                                "typeParameters": null,
                                                "flags": 2097152,
                                                "transformFlags": 0,
                                                "start": 77,
                                                "end": 97
                                            }
                                        ],
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 75,
                                        "end": 97
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 18,
                                    "end": 97
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 8,
                                "end": 97
                            },
                            {
                                "kind": 149,
                                "ellipsisToken": null,
                                "name": {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 98,
                                    "end": 102
                                },
                                "optionalToken": null,
                                "types": {
                                    "kind": 139,
                                    "bitwiseOrToken": null,
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 134234345,
                                        "flags": 2097216,
                                        "transformFlags": 0,
                                        "start": 103,
                                        "end": 110
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 103,
                                    "end": 110
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 98,
                                "end": 110
                            }
                        ],
                        "trailingComma": true,
                        "flags": 2097152,
                        "transformFlags": 0,
                        "start": 8,
                        "end": 111
                    },
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 113,
                        "end": 116
                    },
                    "returnType": {
                        "kind": 139,
                        "bitwiseOrToken": null,
                        "bitwiseAndToken": null,
                        "type": {
                            "kind": 134234254,
                            "flags": 2097216,
                            "transformFlags": 0,
                            "start": 116,
                            "end": 124
                        },
                        "flags": 2097152,
                        "transformFlags": 0,
                        "start": 116,
                        "end": 124
                    },
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 124
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 8,
                "end": 124
            },
            "flags": 64,
            "transformFlags": 0,
            "start": 0,
            "end": 125
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 65,
                "transformFlags": 0,
                "start": 125,
                "end": 131
            },
            "name": {
                "kind": 134299649,
                "text": "B",
                "rawText": "B",
                "flags": 96,
                "transformFlags": 0,
                "start": 131,
                "end": 133
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "transformFlags": 0,
                "start": 133,
                "end": 135
            },
            "type": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 288,
                    "typeParameters": null,
                    "arrowTypeParameterList": {
                        "kind": 292,
                        "parameters": [
                            {
                                "kind": 284,
                                "ellipsisToken": null,
                                "name": {
                                    "kind": 134299649,
                                    "text": "_this",
                                    "rawText": "_this",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 137,
                                    "end": 145
                                },
                                "optionalToken": null,
                                "types": {
                                    "kind": 139,
                                    "bitwiseOrToken": {
                                        "kind": 134251592,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 146,
                                        "end": 148
                                    },
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 137,
                                        "types": [
                                            {
                                                "kind": 144,
                                                "typeName": {
                                                    "kind": 134299649,
                                                    "text": "SupperLongLongLongLongLongLongLongLongLongLongLongType",
                                                    "rawText": "SupperLongLongLongLongLongLongLongLongLongLongLongType",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 148,
                                                    "end": 203
                                                },
                                                "typeParameters": null,
                                                "flags": 2097152,
                                                "transformFlags": 0,
                                                "start": 148,
                                                "end": 203
                                            },
                                            {
                                                "kind": 144,
                                                "typeName": {
                                                    "kind": 134299649,
                                                    "text": "FooBarBazLorem12345",
                                                    "rawText": "FooBarBazLorem12345",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 205,
                                                    "end": 225
                                                },
                                                "typeParameters": null,
                                                "flags": 2097152,
                                                "transformFlags": 0,
                                                "start": 205,
                                                "end": 225
                                            }
                                        ],
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 203,
                                        "end": 225
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 146,
                                    "end": 225
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 135,
                                "end": 225
                            },
                            {
                                "kind": 149,
                                "ellipsisToken": null,
                                "name": {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 226,
                                    "end": 230
                                },
                                "optionalToken": null,
                                "types": {
                                    "kind": 139,
                                    "bitwiseOrToken": null,
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 134234345,
                                        "flags": 2097216,
                                        "transformFlags": 0,
                                        "start": 231,
                                        "end": 238
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 231,
                                    "end": 238
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 226,
                                "end": 238
                            }
                        ],
                        "trailingComma": true,
                        "flags": 2097152,
                        "transformFlags": 0,
                        "start": 135,
                        "end": 239
                    },
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 241,
                        "end": 244
                    },
                    "returnType": {
                        "kind": 139,
                        "bitwiseOrToken": null,
                        "bitwiseAndToken": null,
                        "type": {
                            "kind": 134234254,
                            "flags": 2097216,
                            "transformFlags": 0,
                            "start": 244,
                            "end": 252
                        },
                        "flags": 2097152,
                        "transformFlags": 0,
                        "start": 244,
                        "end": 252
                    },
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 135,
                    "end": 252
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 135,
                "end": 252
            },
            "flags": 65,
            "transformFlags": 0,
            "start": 125,
            "end": 252
        }
    ],
    "isModule": false,
    "source": "type A = (\n  this: | SupperLongLongLongLongLongLongLongLongLongLongLongType | FooBarBazLorem12345,\n  b: number,\n) => boolean;\n\ntype B = (\n  _this: | SupperLongLongLongLongLongLongLongLongLongLongLongType | FooBarBazLorem12345,\n  b: number,\n) => boolean\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 253
}
```

### Printed

```javascript

type A = (this: | SupperLongLongLongLongLongLongLongLongLongLongLongType
| FooBarBazLorem12345,
b: number) =>  boolean
type B = (_this: | SupperLongLongLongLongLongLongLongLongLongLongLongType
| FooBarBazLorem12345,
b: number) =>  boolean

```

### Diagnostics

```javascript
✔ No errors
```

