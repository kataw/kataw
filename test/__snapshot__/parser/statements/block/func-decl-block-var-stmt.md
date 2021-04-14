# Kataw parser test case

## Input

`````js
 function f() {} var f;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 176,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37814362,
                "flags": 768,
                "start": 0,
                "end": 9
            },
            "generatorToken": null,
            "name": {
                "kind": 81921,
                "text": "f",
                "rawText": "f",
                "flags": 768,
                "start": 9,
                "end": 11
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 256,
                "start": 11,
                "end": 13
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "multiline": false,
                    "flags": 256,
                    "start": 15,
                    "end": 15
                },
                "flags": 256,
                "start": 13,
                "end": 16
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 256,
            "start": 0,
            "end": 16
        },
        {
            "kind": 155,
            "varKeyword": {
                "kind": 37757002,
                "flags": 768,
                "start": 16,
                "end": 20
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 81921,
                            "text": "f",
                            "rawText": "f",
                            "flags": 768,
                            "start": 20,
                            "end": 22
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 128,
                        "start": 20,
                        "end": 22
                    }
                ],
                "flags": 128,
                "start": 20,
                "end": 22
            },
            "flags": 128,
            "start": 16,
            "end": 23
        }
    ],
    "isModule": false,
    "text": " function f() {} var f;",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 23
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

