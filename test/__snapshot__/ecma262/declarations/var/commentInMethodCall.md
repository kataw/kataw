# Kataw parser test case

## Input

`````js
//commment here
var s: string[];
s.map(// do something
    function () { });
`````

## Options

### Parser Options

`````js
{allowTypes: true}
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "transformFlags": 0,
                "start": 0,
                "end": 19
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "s",
                            "rawText": "s",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 19,
                            "end": 21
                        },
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 136,
                                "type": {
                                    "kind": 134234347,
                                    "flags": 2097216,
                                    "transformFlags": 0,
                                    "start": 22,
                                    "end": 29
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 22,
                                "end": 31
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 22,
                            "end": 31
                        },
                        "initializer": null,
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 19,
                        "end": 31
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 19,
                "end": 31
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 32
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 129,
                    "member": {
                        "kind": 134299649,
                        "text": "s",
                        "rawText": "s",
                        "flags": 97,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 34
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "map",
                        "rawText": "map",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 35,
                        "end": 38
                    },
                    "flags": 97,
                    "transformFlags": 2,
                    "start": 32,
                    "end": 38
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 177,
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 65,
                                "transformFlags": 0,
                                "start": 39,
                                "end": 67
                            },
                            "asteriskToken": null,
                            "name": null,
                            "typeParameters": null,
                            "formalParameterList": {
                                "kind": 214,
                                "formalParameters": [],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 69,
                                "end": 69
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 72,
                                    "end": 72
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 70,
                                "end": 74
                            },
                            "returnType": null,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 39,
                            "end": 74
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 39,
                    "end": 74
                },
                "flags": 32,
                "transformFlags": 1,
                "start": 32,
                "end": 75
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 32,
            "end": 76
        }
    ],
    "isModule": false,
    "source": "//commment here\nvar s: string[];\ns.map(// do something\n    function () { });",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 76
}
```

### Printed

```javascript
//commment here
//commment here
var s: string[];
s.map(function () {});

```

### Diagnostics

```javascript
✔ No errors
```

