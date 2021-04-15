# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: function foo(yield) {
## Input

`````js
function foo(yield) {
`````

## Output

### Hybrid CST

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
                "flags": 768,
                "start": 0,
                "end": 8
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 768,
                "start": 8,
                "end": 12
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 215,
                        "ellipsisToken": null,
                        "binding": {
                            "kind": 134299649,
                            "text": "yield",
                            "rawText": "yield",
                            "flags": 768,
                            "start": 13,
                            "end": 18
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 256,
                        "start": 13,
                        "end": 18
                    }
                ],
                "trailingComma": false,
                "flags": 256,
                "start": 12,
                "end": 19
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "multiline": false,
                    "flags": 256,
                    "start": 21,
                    "end": 21
                },
                "flags": 256,
                "start": 19,
                "end": 21
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 128,
            "start": 0,
            "end": 21
        }
    ],
    "isModule": false,
    "text": "function foo(yield) {",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 21,
            "end": 21
        }
    ],
    "start": 0,
    "end": 21
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

