# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: as super class name
> :: case: function
## Input

`````js
class x extends function {}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37814352,
                "flags": 768,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 768,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "classHeritage": {
                "kind": 279,
                "extendsToken": {
                    "kind": 4194391,
                    "flags": 768,
                    "start": 7,
                    "end": 15
                },
                "expression": {
                    "kind": 177,
                    "asyncKeyword": null,
                    "functionKeyword": {
                        "kind": 37814362,
                        "flags": 768,
                        "start": 15,
                        "end": 24
                    },
                    "generatorToken": null,
                    "name": {
                        "kind": 16637,
                        "text": "",
                        "autofix": 0,
                        "flags": 12,
                        "start": 24,
                        "end": 24
                    },
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 24,
                        "end": 24
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "multiline": false,
                            "flags": 256,
                            "start": 26,
                            "end": 26
                        },
                        "flags": 256,
                        "start": 24,
                        "end": 27
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "flags": 256,
                    "start": 15,
                    "end": 27
                },
                "typeParameter": null,
                "flags": 128,
                "start": 15,
                "end": 27
            },
            "members": {
                "kind": 277,
                "elements": [],
                "flags": 256,
                "start": 0,
                "end": 0
            },
            "flags": 128,
            "start": 0,
            "end": 27
        }
    ],
    "isModule": false,
    "text": "class x extends function {}",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 24,
            "end": 26
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 24,
            "end": 26
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 27,
            "end": 27
        }
    ],
    "start": 0,
    "end": 27
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

