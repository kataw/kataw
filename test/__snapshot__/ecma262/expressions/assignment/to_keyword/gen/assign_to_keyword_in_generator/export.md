# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/gen/assign_to_keyword_in_generator
> :: test: assign to keyword in generator
> :: case: export
## Options

`````js
{}
`````
## Input

`````js
function *f(){
  export = 1;
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
                "transformFlags": 0,
                "start": 0,
                "end": 8
            },
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "transformFlags": 32,
                "start": 8,
                "end": 10
            },
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "transformFlags": 0,
                "start": 10,
                "end": 11
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 12,
                "end": 12
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 257,
                            "exportKeyword": {
                                "kind": 4202582,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 14,
                                "end": 23
                            },
                            "declaration": null,
                            "namedExports": null,
                            "exportFromClause": null,
                            "fromClause": null,
                            "exportKind": 0,
                            "flags": 81,
                            "transformFlags": 0,
                            "start": 14,
                            "end": 23
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 14,
                    "end": 23
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 13,
                "end": 23
            },
            "returnType": null,
            "flags": 272,
            "transformFlags": 0,
            "start": 0,
            "end": 23
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 1,
                "rawText": "1",
                "flags": 96,
                "transformFlags": 0,
                "start": 25,
                "end": 27
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 25,
            "end": 28
        }
    ],
    "isModule": false,
    "source": "function *f(){\n  export = 1;\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 30
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The `export` keyword can only be used with the module goal - start: 14, end: 23
✖ Declaration or statement expected - start: 23, end: 25
✖ Declaration or statement expected - start: 28, end: 30

```

