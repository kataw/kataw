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
                "flags": 64,
                "start": 5,
                "end": 14
            },
            "asteriskToken": {
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
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
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
                    "statements": [
                        {
                            "kind": 167,
                            "forKeyword": {
                                "kind": 37757017,
                                "flags": 81,
                                "start": 21,
                                "end": 29
                            },
                            "awaitKeyword": {
                                "kind": 82196,
                                "flags": 64,
                                "start": 29,
                                "end": 35
                            },
                            "initializer": {
                                "kind": 299,
                                "importKeyword": {
                                    "kind": 37814364,
                                    "flags": 64,
                                    "start": 37,
                                    "end": 43
                                },
                                "metaIdentifier": {
                                    "kind": 16595,
                                    "flags": 96,
                                    "start": 44,
                                    "end": 48
                                },
                                "flags": 43,
                                "start": 96,
                                "end": 48
                            },
                            "ofKeyword": {
                                "kind": 16793717,
                                "flags": 64,
                                "start": 48,
                                "end": 51
                            },
                            "expression": {
                                "kind": 138477575,
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
                            "flags": 81,
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

```

### Diagnostics

```javascript
✖ The left-hand side of a 'for...of' statement must be a variable or a property access. - start: 51, end: 56

```

