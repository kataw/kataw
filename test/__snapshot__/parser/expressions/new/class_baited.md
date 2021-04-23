# Kataw parser test case

## Input

`````js
new class extends{}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 210,
                "newKeyword": {
                    "kind": 138477661,
                    "flags": 768,
                    "start": 0,
                    "end": 3
                },
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 768,
                        "start": 3,
                        "end": 9
                    },
                    "name": null,
                    "typeParameters": null,
                    "classHeritage": {
                        "kind": 279,
                        "extendsToken": {
                            "kind": 4194391,
                            "flags": 768,
                            "start": 9,
                            "end": 17
                        },
                        "expression": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "start": 18,
                                "end": 18
                            },
                            "flags": 256,
                            "start": 17,
                            "end": 19
                        },
                        "typeParameter": null,
                        "flags": 128,
                        "start": 17,
                        "end": 19
                    },
                    "members": {
                        "kind": 277,
                        "elements": [],
                        "flags": 256,
                        "start": 3,
                        "end": 3
                    },
                    "flags": 256,
                    "start": 3,
                    "end": 19
                },
                "argumentList": null,
                "flags": 256,
                "start": 0,
                "end": 19
            },
            "flags": 128,
            "start": 0,
            "end": 19
        }
    ],
    "isModule": false,
    "text": "new class extends{}",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 19,
            "end": 19
        }
    ],
    "start": 0,
    "end": 19
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

