# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/miscellaneous/should-pass/autogen.md
- Path: kataw8/test\__snapshot__\parser\miscellaneous\should-pass\gen\in_a_block
> :: test: in a block
> :: case: async
>          function foo() {
>          
>          ;
## Input

`````js
{ async
function foo() {

; }
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
                            "kind": 134299649,
                            "text": "async",
                            "rawText": "async",
                            "flags": 96,
                            "start": 1,
                            "end": 7
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 7
                    },
                    {
                        "kind": 176,
                        "declareKeyword": null,
                        "asyncKeyword": null,
                        "functionKeyword": {
                            "kind": 37822554,
                            "flags": 65,
                            "start": 7,
                            "end": 16
                        },
                        "generatorToken": null,
                        "name": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "start": 16,
                            "end": 20
                        },
                        "formalParameters": {
                            "kind": 214,
                            "formalParameterList": [],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 20,
                            "end": 22
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [
                                    {
                                        "kind": 168,
                                        "flags": 16,
                                        "start": 24,
                                        "end": 27
                                    }
                                ],
                                "flags": 33,
                                "start": 24,
                                "end": 27
                            },
                            "flags": 32,
                            "start": 22,
                            "end": 29
                        },
                        "typeParameters": null,
                        "returnType": null,
                        "flags": 16,
                        "start": 7,
                        "end": 29
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 29
            },
            "flags": 16,
            "start": 0,
            "end": 29
        }
    ],
    "isModule": false,
    "source": "{ async\nfunction foo() {\n\n; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 29
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The parser expected to find a '}' to match the '{' token here - start: 29, end: 29

```

