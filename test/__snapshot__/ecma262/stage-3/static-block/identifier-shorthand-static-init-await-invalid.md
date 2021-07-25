# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, next: true }
`````

## Input

`````js
// IdentifierReference may not be `await` within class static blocks
class C {
  static {
    ({ await });
  }
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
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "transformFlags": 0,
                "start": 0,
                "end": 74
            },
            "name": {
                "kind": 134299649,
                "text": "C",
                "rawText": "C",
                "flags": 96,
                "transformFlags": 0,
                "start": 74,
                "end": 76
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [
                        {
                            "kind": 305,
                            "decorators": null,
                            "declaredKeyword": null,
                            "staticKeyword": {
                                "kind": 8388716,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 78,
                                "end": 87
                            },
                            "block": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 121,
                                                "expression": {
                                                    "kind": 220,
                                                    "propertyList": {
                                                        "kind": 218,
                                                        "properties": [
                                                            {
                                                                "kind": 134299649,
                                                                "text": "await",
                                                                "rawText": "await",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 96,
                                                                "end": 102
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 16,
                                                        "transformFlags": 0,
                                                        "start": 96,
                                                        "end": 102
                                                    },
                                                    "flags": 48,
                                                    "transformFlags": 8,
                                                    "start": 95,
                                                    "end": 104
                                                },
                                                "flags": 35,
                                                "transformFlags": 0,
                                                "start": 89,
                                                "end": 105
                                            },
                                            "flags": 16,
                                            "transformFlags": 4096,
                                            "start": 89,
                                            "end": 106
                                        }
                                    ],
                                    "flags": 17,
                                    "transformFlags": 0,
                                    "start": 89,
                                    "end": 106
                                },
                                "flags": 78,
                                "transformFlags": 0,
                                "start": 0,
                                "end": 110
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 78,
                            "end": 110
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 78,
                    "end": 110
                },
                "flags": 76,
                "transformFlags": 0,
                "start": 32,
                "end": 112
            },
            "flags": 17,
            "transformFlags": 0,
            "start": 0,
            "end": 112
        }
    ],
    "isModule": false,
    "source": "// IdentifierReference may not be `await` within class static blocks\nclass C {\n  static {\n    ({ await });\n  }\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 112
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected. Reserved word in strict mode - start: 102, end: 104

```

