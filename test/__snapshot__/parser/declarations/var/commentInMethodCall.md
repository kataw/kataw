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
                            "start": 19,
                            "end": 21
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 136,
                                "type": {
                                    "kind": 134234347,
                                    "flags": 2097216,
                                    "start": 22,
                                    "end": 29
                                },
                                "flags": 2097152,
                                "start": 22,
                                "end": 31
                            },
                            "flags": 2097152,
                            "start": 21,
                            "end": 31
                        },
                        "initializer": null,
                        "flags": 16,
                        "start": 19,
                        "end": 31
                    }
                ],
                "flags": 16,
                "start": 19,
                "end": 31
            },
            "flags": 16,
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
                        "flags": 96,
                        "start": 32,
                        "end": 34
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "map",
                        "rawText": "map",
                        "flags": 96,
                        "start": 35,
                        "end": 38
                    },
                    "flags": 536870944,
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
                                "start": 39,
                                "end": 67
                            },
                            "generatorToken": null,
                            "name": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 67,
                                "end": 70
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 72,
                                    "end": 72
                                },
                                "flags": 32,
                                "start": 70,
                                "end": 74
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 32,
                            "start": 39,
                            "end": 74
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 39,
                    "end": 74
                },
                "flags": 268435488,
                "start": 32,
                "end": 75
            },
            "flags": 16,
            "start": 32,
            "end": 76
        }
    ],
    "isModule": false,
    "source": "//commment here\nvar s: string[];\ns.map(// do something\n    function () { });",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 76
}
```

### Printed

```javascript
//commment here

var s;
s.map(function () {});
```

### Diagnostics

```javascript
✔ No errors
```

