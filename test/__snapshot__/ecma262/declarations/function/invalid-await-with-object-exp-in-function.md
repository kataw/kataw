# Kataw parser test case

## Input

`````js
function foo() {
  await { foo };
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
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
                "start": 8,
                "end": 12
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 13,
                "end": 13
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 134299649,
                                "text": "await",
                                "rawText": "await",
                                "flags": 97,
                                "start": 16,
                                "end": 24
                            },
                            "flags": 16,
                            "start": 16,
                            "end": 24
                        },
                        {
                            "kind": 124,
                            "block": {
                                "kind": 249,
                                "statements": [
                                    {
                                        "kind": 120,
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "foo",
                                            "rawText": "foo",
                                            "flags": 96,
                                            "start": 26,
                                            "end": 30
                                        },
                                        "flags": 16,
                                        "start": 26,
                                        "end": 30
                                    }
                                ],
                                "flags": 16,
                                "start": 26,
                                "end": 30
                            },
                            "flags": 16,
                            "start": 24,
                            "end": 32
                        },
                        {
                            "kind": 168,
                            "flags": 16,
                            "start": 32,
                            "end": 33
                        }
                    ],
                    "flags": 33,
                    "start": 16,
                    "end": 33
                },
                "flags": 32,
                "start": 14,
                "end": 35
            },
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 35
        }
    ],
    "isModule": false,
    "source": "function foo() {\n  await { foo };\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 35
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a `;` - start: 24, end: 26

```

