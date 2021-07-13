# Kataw parser test case

## Input

`````js
(class package{})
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
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 6
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "package",
                        "rawText": "package",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 6,
                        "end": 14
                    },
                    "typeParameters": null,
                    "tail": {
                        "kind": 277,
                        "classHeritage": null,
                        "body": {
                            "kind": 303,
                            "elements": [],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 15,
                            "end": 15
                        },
                        "flags": 14,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 16
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 16
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 32,
                "end": 17
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 17
        }
    ],
    "isModule": false,
    "source": "(class package{})",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 17
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected. Reserved word in strict mode - start: 6, end: 14

```

