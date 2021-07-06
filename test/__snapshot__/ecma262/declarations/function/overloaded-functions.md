# Kataw parser test case

## Input

`````js
declare function one(value :null) :false;

declare function two(value :void) :false;

declare function three(value :mixed) :boolean;
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
            "kind": 176,
            "declareKeyword": {
                "kind": 82165,
                "flags": 64,
                "transformFlags": 0,
                "start": 0,
                "end": 7
            },
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "transformFlags": 0,
                "start": 7,
                "end": 16
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "one",
                "rawText": "one",
                "flags": 96,
                "transformFlags": 0,
                "start": 16,
                "end": 20
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "value",
                            "rawText": "value",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 21,
                            "end": 26
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 138477575,
                                "flags": 2097216,
                                "transformFlags": 0,
                                "start": 28,
                                "end": 32
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 28,
                            "end": 32
                        },
                        "right": null,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 21,
                        "end": 32
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 21,
                "end": 32
            },
            "contents": null,
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 205586437,
                    "flags": 2097216,
                    "transformFlags": 0,
                    "start": 35,
                    "end": 40
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 35,
                "end": 40
            },
            "flags": 4112,
            "transformFlags": 0,
            "start": 7,
            "end": 40
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 40,
            "end": 41
        },
        {
            "kind": 176,
            "declareKeyword": {
                "kind": 82165,
                "flags": 64,
                "transformFlags": 0,
                "start": 41,
                "end": 50
            },
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "transformFlags": 0,
                "start": 50,
                "end": 59
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "two",
                "rawText": "two",
                "flags": 96,
                "transformFlags": 0,
                "start": 59,
                "end": 63
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "value",
                            "rawText": "value",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 64,
                            "end": 69
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 138477615,
                                "flags": 2097216,
                                "transformFlags": 0,
                                "start": 71,
                                "end": 75
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 71,
                            "end": 75
                        },
                        "right": null,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 64,
                        "end": 75
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 64,
                "end": 75
            },
            "contents": null,
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 205586437,
                    "flags": 2097216,
                    "transformFlags": 0,
                    "start": 78,
                    "end": 83
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 78,
                "end": 83
            },
            "flags": 4112,
            "transformFlags": 0,
            "start": 50,
            "end": 83
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 83,
            "end": 84
        },
        {
            "kind": 176,
            "declareKeyword": {
                "kind": 82165,
                "flags": 64,
                "transformFlags": 0,
                "start": 84,
                "end": 93
            },
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "transformFlags": 0,
                "start": 93,
                "end": 102
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "three",
                "rawText": "three",
                "flags": 96,
                "transformFlags": 0,
                "start": 102,
                "end": 108
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "value",
                            "rawText": "value",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 109,
                            "end": 114
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 144,
                                "typeName": {
                                    "kind": 134299649,
                                    "text": "mixed",
                                    "rawText": "mixed",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 116,
                                    "end": 121
                                },
                                "typeParameters": null,
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 116,
                                "end": 121
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 116,
                            "end": 121
                        },
                        "right": null,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 109,
                        "end": 121
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 109,
                "end": 121
            },
            "contents": null,
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 134234254,
                    "flags": 2097216,
                    "transformFlags": 0,
                    "start": 124,
                    "end": 131
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 124,
                "end": 131
            },
            "flags": 4112,
            "transformFlags": 0,
            "start": 93,
            "end": 131
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 131,
            "end": 132
        }
    ],
    "isModule": false,
    "source": "declare function one(value :null) :false;\n\ndeclare function two(value :void) :false;\n\ndeclare function three(value :mixed) :boolean;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 132
}
```

### Printed

```javascript

declare function one(value: null): false 
declare function two(value: void): false 

declare function three(value: mixed): boolean 

```

### Diagnostics

```javascript
✔ No errors
```

