  # Kataw parser test case

## Input

`````js
type a = /*a*/{ x: string } /* foo */ | string /* bar *//*b*/;

type b = /*c*//* leading */{ x: string } /* trailing *//*d*/;

type c = /*e*/{ x: string } /* inner */ | string// trailing/*f*/
`````

## Options

### Parser Options

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
                "text": "a",
                "rawText": "a",
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
                    "kind": 137,
                    "types": [
                        {
                            "kind": 134234353,
                            "properties": [
                                {
                                    "kind": 193,
                                    "protoKeyword": null,
                                    "staticKeyword": null,
                                    "getKeyword": null,
                                    "setKeyword": null,
                                    "key": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 15,
                                        "end": 17
                                    },
                                    "optionalToken": null,
                                    "type": {
                                        "kind": 139,
                                        "bitwiseOrToken": null,
                                        "bitwiseAndToken": null,
                                        "type": {
                                            "kind": 134234347,
                                            "flags": 2097216,
                                            "transformFlags": 0,
                                            "start": 18,
                                            "end": 25
                                        },
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 18,
                                        "end": 25
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 15,
                                    "end": 25
                                }
                            ],
                            "trailingComma": false,
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 8,
                            "end": 27
                        },
                        {
                            "kind": 134234347,
                            "flags": 2097216,
                            "transformFlags": 0,
                            "start": 39,
                            "end": 46
                        }
                    ],
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 27,
                    "end": 46
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 8,
                "end": 46
            },
            "flags": 64,
            "transformFlags": 0,
            "start": 0,
            "end": 62
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 65,
                "transformFlags": 0,
                "start": 62,
                "end": 68
            },
            "name": {
                "kind": 134299649,
                "text": "b",
                "rawText": "b",
                "flags": 96,
                "transformFlags": 0,
                "start": 68,
                "end": 70
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "transformFlags": 0,
                "start": 70,
                "end": 72
            },
            "type": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 134234353,
                    "properties": [
                        {
                            "kind": 193,
                            "protoKeyword": null,
                            "staticKeyword": null,
                            "getKeyword": null,
                            "setKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 92,
                                "end": 94
                            },
                            "optionalToken": null,
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134234347,
                                    "flags": 2097216,
                                    "transformFlags": 0,
                                    "start": 95,
                                    "end": 102
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 95,
                                "end": 102
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 92,
                            "end": 102
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 72,
                    "end": 104
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 72,
                "end": 104
            },
            "flags": 65,
            "transformFlags": 0,
            "start": 62,
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
                "text": "c",
                "rawText": "c",
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
                    "kind": 137,
                    "types": [
                        {
                            "kind": 134234353,
                            "properties": [
                                {
                                    "kind": 193,
                                    "protoKeyword": null,
                                    "staticKeyword": null,
                                    "getKeyword": null,
                                    "setKeyword": null,
                                    "key": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 142,
                                        "end": 144
                                    },
                                    "optionalToken": null,
                                    "type": {
                                        "kind": 139,
                                        "bitwiseOrToken": null,
                                        "bitwiseAndToken": null,
                                        "type": {
                                            "kind": 134234347,
                                            "flags": 2097216,
                                            "transformFlags": 0,
                                            "start": 145,
                                            "end": 152
                                        },
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 145,
                                        "end": 152
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 142,
                                    "end": 152
                                }
                            ],
                            "trailingComma": false,
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 135,
                            "end": 154
                        },
                        {
                            "kind": 134234347,
                            "flags": 2097216,
                            "transformFlags": 0,
                            "start": 168,
                            "end": 175
                        }
                    ],
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 154,
                    "end": 175
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 135,
                "end": 175
            },
            "flags": 65,
            "transformFlags": 0,
            "start": 125,
            "end": 175
        }
    ],
    "isModule": false,
    "source": "type a = /*a*/{ x: string } /* foo */ | string /* bar *//*b*/;\n\ntype b = /*c*//* leading */{ x: string } /* trailing *//*d*/;\n\ntype c = /*e*/{ x: string } /* inner */ | string// trailing/*f*/",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 191
}
```

### Printed

```javascript
type a =/*a*/  { x:/* foo */  string } /* foo */ | string /* bar */ /*b*/
type b =/*c*/ /* leading */  {
  x:/* trailing */ /*d*/  string
} /* trailing */ /*d*/

type c =/*e*/  { x:/* inner */  string } /* inner */ | string // trailing/*f*/


```

### Diagnostics

```javascript
✔ No errors
```

