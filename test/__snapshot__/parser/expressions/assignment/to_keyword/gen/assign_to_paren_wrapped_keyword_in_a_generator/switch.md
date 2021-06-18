# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/assignment/to_keyword/gen/assign_to_paren_wrapped_keyword_in_a_generator
> :: test: assign to paren wrapped keyword in a generator
> :: case: switch
## Options

`````js
{}
`````
## Input

`````js
function *f(){
  (switch) = 1;
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
            "generatorToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 8,
                "end": 10
            },
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 10,
                "end": 11
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 11,
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
                                "kind": 121,
                                "expression": {
                                    "kind": 16637,
                                    "text": "",
                                    "flags": 64,
                                    "start": 18,
                                    "end": 18
                                },
                                "flags": 32,
                                "start": 14,
                                "end": 18
                            },
                            "flags": 16,
                            "start": 14,
                            "end": 18
                        },
                        {
                            "kind": 160,
                            "switchKeyword": {
                                "kind": 37757024,
                                "flags": 80,
                                "start": 18,
                                "end": 24
                            },
                            "expression": {
                                "kind": 16637,
                                "text": "",
                                "flags": 64,
                                "start": 24,
                                "end": 24
                            },
                            "caseBlock": {
                                "kind": 152,
                                "clauses": [],
                                "flags": 16,
                                "start": 25,
                                "end": 25
                            },
                            "flags": 80,
                            "start": 18,
                            "end": 25
                        }
                    ],
                    "flags": 33,
                    "start": 14,
                    "end": 25
                },
                "flags": 32,
                "start": 13,
                "end": 25
            },
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 25
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 1,
                "rawText": "1",
                "flags": 96,
                "start": 27,
                "end": 29
            },
            "flags": 16,
            "start": 27,
            "end": 30
        }
    ],
    "isModule": false,
    "source": "function *f(){\n  (switch) = 1;\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 32
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 18, end: 24
✖ Missing an opening parentheses - '( - start: 24, end: 25
✖ The parser expected to find a '}' to match the '{' token here - start: 26, end: 27
✖ Declaration or statement expected - start: 30, end: 32

```

