# Kataw parser test case

## Input

`````js
function f(){ do        { continue }     while(true);}
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
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 8,
                "end": 10
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 11,
                "end": 11
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 169,
                            "doKeyword": {
                                "kind": 4202580,
                                "flags": 80,
                                "start": 13,
                                "end": 16
                            },
                            "statement": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [
                                        {
                                            "kind": 172,
                                            "continueKeyword": {
                                                "kind": 37757009,
                                                "flags": 80,
                                                "start": 25,
                                                "end": 34
                                            },
                                            "label": null,
                                            "flags": 16,
                                            "start": 25,
                                            "end": 34
                                        }
                                    ],
                                    "flags": 16,
                                    "start": 25,
                                    "end": 34
                                },
                                "flags": 16,
                                "start": 16,
                                "end": 36
                            },
                            "whileKeyword": {
                                "kind": 37757028,
                                "flags": 64,
                                "start": 36,
                                "end": 46
                            },
                            "expression": {
                                "kind": 24752947,
                                "flags": 96,
                                "start": 47,
                                "end": 51
                            },
                            "flags": 80,
                            "start": 13,
                            "end": 53
                        }
                    ],
                    "flags": 32,
                    "start": 13,
                    "end": 53
                },
                "flags": 32,
                "start": 12,
                "end": 54
            },
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 54
        }
    ],
    "isModule": false,
    "source": "function f(){ do        { continue }     while(true);}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 54
}
```

### Printed

```javascript

function f() {
  do {}
  while (true);
}
```

### Diagnostics

```javascript
✔ No errors
```

