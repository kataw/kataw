# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-28
- From: d
- Path: s
> :: test: unclosed parens
> :: case: }} let function const {
## Input

`````js
{( }} let function const {
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 121,
                            "expression": {
                                "kind": 16637,
                                "text": "",
                                "flags": 64,
                                "start": 2,
                                "end": 2
                            },
                            "flags": 32,
                            "start": 1,
                            "end": 2
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 2
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 2
            },
            "flags": 16,
            "start": 0,
            "end": 4
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "let",
                "rawText": "let",
                "flags": 96,
                "start": 5,
                "end": 9
            },
            "flags": 16,
            "start": 5,
            "end": 9
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 9,
                "end": 18
            },
            "generatorToken": null,
            "name": null,
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 18,
                "end": 18
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 18,
                    "end": 18
                },
                "flags": 32,
                "start": 18,
                "end": 18
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 9,
            "end": 18
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 64,
                "start": 18,
                "end": 24
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 26,
                                "end": 26
                            },
                            "flags": 32,
                            "start": 24,
                            "end": 26
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 24,
                        "end": 26
                    }
                ],
                "flags": 16777232,
                "start": 24,
                "end": 26
            },
            "flags": 33554448,
            "start": 18,
            "end": 26
        }
    ],
    "isModule": false,
    "source": "{( }} let function const {",
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
✖ Identifier expected - start: 2, end: 4
✖ Declaration or statement expected - start: 4, end: 5
✖ Expected a `;` - start: 9, end: 18
✖ Binding identifier expected - start: 18, end: 24
✖ Missing an opening parentheses - '( - start: 18, end: 24
✖ Expression expected - start: 18, end: 24
✖ The parser expected to find a '}' to match the '{' token here - start: 26, end: 26
✖ Missing initializer in const declaration - start: 26, end: 26

```

