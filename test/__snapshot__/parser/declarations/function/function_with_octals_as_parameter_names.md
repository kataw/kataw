# Kataw parser test case

## Input

`````js
function foo(001, 003) { "use strict"; }
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
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
                "start": 8,
                "end": 12
            },
            "typeParameters": null,
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 12,
                "end": 16
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 13,
                    "end": 13
                },
                "flags": 32,
                "start": 13,
                "end": 13
            },
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 13
        },
        {
            "kind": 120,
            "expression": {
                "kind": 132,
                "expressions": [
                    {
                        "kind": 201392130,
                        "text": 1,
                        "rawText": "001",
                        "flags": 131168,
                        "start": 13,
                        "end": 16
                    },
                    {
                        "kind": 201392130,
                        "text": 3,
                        "rawText": "003",
                        "flags": 131168,
                        "start": 17,
                        "end": 21
                    }
                ],
                "flags": 32,
                "start": 13,
                "end": 21
            },
            "flags": 16,
            "start": 13,
            "end": 21
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 201392131,
                            "text": "use strict",
                            "rawText": "\"use strict\"",
                            "flags": 96,
                            "start": 24,
                            "end": 37
                        },
                        "flags": 16,
                        "start": 24,
                        "end": 38
                    }
                ],
                "flags": 16,
                "start": 24,
                "end": 38
            },
            "flags": 16,
            "start": 22,
            "end": 40
        }
    ],
    "isModule": false,
    "source": "function foo(001, 003) { \"use strict\"; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 40
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a ')' to match the '(' token here - start: 13, end: 16
✖ Expected a `;` - start: 21, end: 22

```

