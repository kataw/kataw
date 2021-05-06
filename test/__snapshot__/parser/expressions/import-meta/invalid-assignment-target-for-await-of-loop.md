# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
async function* f() {
    for await (import.meta of null) ;
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
            "asyncKeyword": {
                "kind": 82031,
                "flags": 64,
                "start": 0,
                "end": 5
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 0,
                "start": 5,
                "end": 14
            },
            "generatorToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 14,
                "end": 15
            },
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 15,
                "end": 17
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 17,
                "end": 19
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 167,
                            "forKeyword": {
                                "kind": 37757017,
                                "flags": 1,
                                "start": 21,
                                "end": 29
                            },
                            "ofKeyword": {
                                "kind": 16793717,
                                "flags": 0,
                                "start": 48,
                                "end": 51
                            },
                            "initializer": {
                                "kind": 120,
                                "expression": {
                                    "kind": 207,
                                    "importKeyword": {
                                        "kind": 37814364,
                                        "flags": 0,
                                        "start": 37,
                                        "end": 43
                                    },
                                    "flags": 43,
                                    "start": 96,
                                    "end": 48
                                },
                                "flags": 16,
                                "start": 43,
                                "end": 48
                            },
                            "expression": {
                                "kind": 269,
                                "text": null,
                                "flags": 96,
                                "start": 51,
                                "end": 56
                            },
                            "statement": {
                                "kind": 168,
                                "flags": 16,
                                "start": 57,
                                "end": 59
                            },
                            "awaitKeyword": {
                                "kind": 82032,
                                "flags": 64,
                                "start": 29,
                                "end": 35
                            },
                            "flags": 16,
                            "start": 21,
                            "end": 59
                        }
                    ],
                    "flags": 33,
                    "start": 21,
                    "end": 59
                },
                "flags": 32,
                "start": 19,
                "end": 61
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 400,
            "start": 0,
            "end": 61
        }
    ],
    "isModule": true,
    "source": "async function* f() {\n    for await (import.meta of null) ;\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 61
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expected a `;` - start: 48, end: 51
✖ The left-hand side of a 'for...of' statement must be a variable or a property access. - start: 51, end: 56

```

