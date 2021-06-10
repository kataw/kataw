# Kataw parser test case

## Input

`````js
new class extends{}
`````

## Output

### CST

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
                    "flags": 96,
                    "start": 0,
                    "end": 3
                },
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 64,
                        "start": 3,
                        "end": 9
                    },
                    "name": null,
                    "typeParameters": null,
                    "tail": {
                        "kind": 277,
                        "classHeritage": {
                            "kind": 279,
                            "extendsKeyword": {
                                "kind": 4194391,
                                "flags": 80,
                                "start": 9,
                                "end": 17
                            },
                            "expression": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "start": 18,
                                    "end": 18
                                },
                                "flags": 48,
                                "start": 17,
                                "end": 19
                            },
                            "typeParameter": null,
                            "flags": 16,
                            "start": 17,
                            "end": 19
                        },
                        "body": {
                            "kind": 262,
                            "elements": [],
                            "flags": 32,
                            "start": 9,
                            "end": 9
                        },
                        "flags": 9,
                        "start": 32,
                        "end": 9
                    },
                    "flags": 32,
                    "start": 3,
                    "end": 19
                },
                "argumentList": null,
                "flags": 96,
                "start": 0,
                "end": 19
            },
            "flags": 16,
            "start": 0,
            "end": 19
        }
    ],
    "isModule": false,
    "source": "new class extends{}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 19
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Missing an opening brace - '{ - start: 19, end: 19

```

