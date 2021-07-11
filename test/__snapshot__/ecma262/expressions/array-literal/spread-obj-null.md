# Kataw parser test case

## Input

`````js
(function(obj) {
}.apply(null, [{...null}]));
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 131,
                    "expression": {
                        "kind": 129,
                        "member": {
                            "kind": 177,
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 64,
                                "start": 1,
                                "end": 9
                            },
                            "asteriskToken": null,
                            "name": null,
                            "typeParameters": null,
                            "formalParameterList": {
                                "kind": 214,
                                "formalParameters": [
                                    {
                                        "kind": 134299649,
                                        "text": "obj",
                                        "rawText": "obj",
                                        "flags": 96,
                                        "start": 10,
                                        "end": 13
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 10,
                                "end": 13
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 33,
                                    "start": 16,
                                    "end": 16
                                },
                                "flags": 32,
                                "start": 14,
                                "end": 18
                            },
                            "returnType": null,
                            "flags": 32,
                            "start": 1,
                            "end": 18
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "apply",
                            "rawText": "apply",
                            "flags": 96,
                            "start": 19,
                            "end": 24
                        },
                        "flags": 32,
                        "start": 1,
                        "end": 24
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [
                            {
                                "kind": 138477575,
                                "flags": 96,
                                "start": 25,
                                "end": 29
                            },
                            {
                                "kind": 119,
                                "elementList": {
                                    "kind": 270,
                                    "elements": [
                                        {
                                            "kind": 220,
                                            "propertyList": {
                                                "kind": 218,
                                                "properties": [
                                                    {
                                                        "kind": 224,
                                                        "ellipsisToken": {
                                                            "kind": 524302,
                                                            "flags": 64,
                                                            "start": 33,
                                                            "end": 36
                                                        },
                                                        "argument": {
                                                            "kind": 138477575,
                                                            "flags": 96,
                                                            "start": 36,
                                                            "end": 40
                                                        },
                                                        "flags": 1073741856,
                                                        "start": 33,
                                                        "end": 40
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 16,
                                                "start": 33,
                                                "end": 40
                                            },
                                            "flags": 48,
                                            "start": 32,
                                            "end": 41
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 32,
                                    "end": 41
                                },
                                "flags": 32,
                                "start": 30,
                                "end": 42
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 25,
                        "end": 42
                    },
                    "flags": 268435488,
                    "start": 1,
                    "end": 43
                },
                "flags": 32,
                "start": 0,
                "end": 44
            },
            "flags": 16,
            "start": 0,
            "end": 45
        }
    ],
    "isModule": false,
    "source": "(function(obj) {\n}.apply(null, [{...null}]));",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 45
}
```

### Printed

```javascript

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  (function (obj) {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  }.apply(null, [{ ...null },]));

```

### Diagnostics

```javascript
✔ No errors
```

