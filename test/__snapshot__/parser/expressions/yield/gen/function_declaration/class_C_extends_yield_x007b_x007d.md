# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: function declaration
> :: case: class C extends yield { }
## Input

`````js
function not_gen() { class C extends yield { } }}
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
                "flags": 0,
                "start": 0,
                "end": 8
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "not_gen",
                "rawText": "not_gen",
                "flags": 96,
                "start": 8,
                "end": 16
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 16,
                "end": 18
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 178,
                            "declareKeyword": null,
                            "decorators": null,
                            "classKeyword": {
                                "kind": 37822544,
                                "flags": 0,
                                "start": 20,
                                "end": 26
                            },
                            "name": {
                                "kind": 134299649,
                                "text": "C",
                                "rawText": "C",
                                "flags": 96,
                                "start": 26,
                                "end": 28
                            },
                            "typeParameters": null,
                            "members": {
                                "kind": 277,
                                "classHeritage": null,
                                "elements": [],
                                "flags": 32,
                                "start": 20,
                                "end": 20
                            },
                            "flags": 16,
                            "start": 20,
                            "end": 28
                        }
                    ],
                    "flags": 32,
                    "start": 20,
                    "end": 28
                },
                "flags": 32,
                "start": 18,
                "end": 28
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 28
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "yield",
                "rawText": "yield",
                "flags": 96,
                "start": 36,
                "end": 42
            },
            "flags": 16,
            "start": 36,
            "end": 42
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "flags": 16,
                "start": 44,
                "end": 44
            },
            "flags": 16,
            "start": 42,
            "end": 46
        }
    ],
    "isModule": false,
    "source": "function not_gen() { class C extends yield { } }}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 49
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The parser expected to find a '}' to match the '{' token here - start: 28, end: 36
✖ Expected a `;` - start: 42, end: 44
✖ Declaration or statement expected - start: 46, end: 48
✖ Declaration or statement expected - start: 48, end: 49

```

