# Kataw parser test case

## Input

`````js
function f() {
    return import?.("foo").then(party);
}
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
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 0,
                "end": 8
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 8,
                "end": 10
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 11,
                "end": 11
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 81,
                                "start": 14,
                                "end": 25
                            },
                            "expression": {
                                "kind": 206,
                                "importKeyword": {
                                    "kind": 37814364,
                                    "flags": 64,
                                    "start": 25,
                                    "end": 32
                                },
                                "expression": {
                                    "kind": 131,
                                    "expression": {
                                        "kind": 129,
                                        "member": {
                                            "kind": 121,
                                            "expression": {
                                                "kind": 201392131,
                                                "text": "foo",
                                                "rawText": "\"foo\"",
                                                "flags": 96,
                                                "start": 35,
                                                "end": 40
                                            },
                                            "flags": 34,
                                            "start": 32,
                                            "end": 41
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "then",
                                            "rawText": "then",
                                            "flags": 96,
                                            "start": 42,
                                            "end": 46
                                        },
                                        "flags": 34,
                                        "start": 34,
                                        "end": 46
                                    },
                                    "argumentList": {
                                        "kind": 256,
                                        "elements": [
                                            {
                                                "kind": 134299649,
                                                "text": "party",
                                                "rawText": "party",
                                                "flags": 96,
                                                "start": 47,
                                                "end": 52
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 47,
                                        "end": 52
                                    },
                                    "flags": 268435488,
                                    "start": 34,
                                    "end": 53
                                },
                                "flags": 32,
                                "start": 32,
                                "end": 53
                            },
                            "flags": 81,
                            "start": 14,
                            "end": 54
                        }
                    ],
                    "flags": 33,
                    "start": 14,
                    "end": 54
                },
                "flags": 32,
                "start": 12,
                "end": 56
            },
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 56
        }
    ],
    "isModule": false,
    "source": "function f() {\n    return import?.(\"foo\").then(party);\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 56
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a ')' to match the '(' token here - start: 53, end: 54

```

