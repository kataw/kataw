# Kataw parser test case

## Input

`````js
do if(8)function s(){}
while(y)
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 169,
            "doKeyword": {
                "kind": 4202580,
                "flags": 768,
                "start": 0,
                "end": 2
            },
            "expression": {
                "kind": 81921,
                "text": "y",
                "rawText": "y",
                "flags": 768,
                "start": 29,
                "end": 30
            },
            "whileKeyword": {
                "kind": 37757028,
                "flags": 768,
                "start": 22,
                "end": 28
            },
            "statement": {
                "kind": 164,
                "ifKeyword": {
                    "kind": 37757019,
                    "flags": 768,
                    "start": 2,
                    "end": 5
                },
                "expression": {
                    "kind": 81921,
                    "text": 8,
                    "rawText": "8",
                    "flags": 768,
                    "start": 6,
                    "end": 7
                },
                "consequent": {
                    "kind": 176,
                    "asyncKeyword": null,
                    "functionKeyword": {
                        "kind": 37814362,
                        "flags": 768,
                        "start": 8,
                        "end": 16
                    },
                    "generatorToken": null,
                    "name": {
                        "kind": 81921,
                        "text": "s",
                        "rawText": "s",
                        "flags": 768,
                        "start": 16,
                        "end": 18
                    },
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 18,
                        "end": 20
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
                        "start": 20,
                        "end": 22
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "flags": 256,
                    "start": 8,
                    "end": 22
                },
                "elseKeyword": null,
                "alternate": null,
                "flags": 128,
                "start": 2,
                "end": 22
            },
            "flags": 128,
            "start": 0,
            "end": 31
        }
    ],
    "isModule": false,
    "text": "do if(8)function s(){}\nwhile(y)",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 31
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

