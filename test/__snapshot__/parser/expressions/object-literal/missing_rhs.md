# Kataw parser test case

## Input

`````js
wrap({async [foo""](){}});
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
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "wrap",
                    "rawText": "wrap",
                    "flags": 96,
                    "start": 0,
                    "end": 4
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 351,
                                        "asyncKeyword": {
                                            "kind": 82031,
                                            "flags": 352,
                                            "start": 6,
                                            "end": 11
                                        },
                                        "asteriskToken": null,
                                        "getKeyword": null,
                                        "setKeyword": null,
                                        "method": {
                                            "kind": 209,
                                            "name": {
                                                "kind": 194,
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "foo",
                                                    "rawText": "foo",
                                                    "flags": 96,
                                                    "start": 13,
                                                    "end": 16
                                                },
                                                "flags": 32,
                                                "start": 11,
                                                "end": 16
                                            },
                                            "typeParameters": null,
                                            "formalParameterList": {
                                                "kind": 214,
                                                "formalParameters": [],
                                                "trailingComma": false,
                                                "flags": 288,
                                                "start": 16,
                                                "end": 16
                                            },
                                            "returnType": null,
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [],
                                                    "flags": 32,
                                                    "start": 16,
                                                    "end": 16
                                                },
                                                "flags": 32,
                                                "start": 16,
                                                "end": 16
                                            },
                                            "flags": 288,
                                            "start": 16,
                                            "end": 16
                                        },
                                        "flags": 32,
                                        "start": 6,
                                        "end": 16
                                    },
                                    {
                                        "kind": 201392131,
                                        "text": "",
                                        "rawText": "\"\"",
                                        "flags": 96,
                                        "start": 16,
                                        "end": 18
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 6,
                                "end": 18
                            },
                            "flags": 48,
                            "start": 5,
                            "end": 18
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 5,
                    "end": 18
                },
                "flags": 268435488,
                "start": 0,
                "end": 18
            },
            "flags": 16,
            "start": 0,
            "end": 18
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "parameters": [],
                "returnType": null,
                "arrowToken": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 22,
                        "end": 22
                    },
                    "flags": 32,
                    "start": 21,
                    "end": 23
                },
                "flags": 32,
                "start": 19,
                "end": 23
            },
            "flags": 16,
            "start": 19,
            "end": 23
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 25,
            "end": 26
        }
    ],
    "isModule": false,
    "source": "wrap({async [foo\"\"](){}});",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 26
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a computed property - start: 16, end: 18
✖ Property definition expected. Did you mean to use a ':'? - start: 18, end: 19
✖ ',' expected - start: 18, end: 19
✖ Declaration or statement expected - start: 23, end: 24
✖ Declaration or statement expected - start: 24, end: 25

```

