# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, next: true }
`````

## Input

`````js
// BindingIdentifier may not be `await` within class static blocks
class C {
  static {
    class await {}
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
                "flags": 1,
                "start": 0,
                "end": 72
            },
            "name": {
                "kind": 134299649,
                "text": "C",
                "rawText": "C",
                "flags": 96,
                "start": 72,
                "end": 74
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 262,
                    "elements": [
                        {
                            "kind": 263,
                            "decorators": null,
                            "declaredKeyword": null,
                            "staticKeyword": null,
                            "block": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [
                                        {
                                            "kind": 178,
                                            "declareKeyword": null,
                                            "decorators": null,
                                            "classKeyword": {
                                                "kind": 37822544,
                                                "flags": 1,
                                                "start": 87,
                                                "end": 97
                                            },
                                            "name": {
                                                "kind": 134299649,
                                                "text": "await",
                                                "rawText": "await",
                                                "flags": 96,
                                                "start": 97,
                                                "end": 103
                                            },
                                            "typeParameters": null,
                                            "tail": {
                                                "kind": 277,
                                                "classHeritage": null,
                                                "body": {
                                                    "kind": 262,
                                                    "elements": [],
                                                    "flags": 32,
                                                    "start": 105,
                                                    "end": 105
                                                },
                                                "flags": 32,
                                                "start": 103,
                                                "end": 106
                                            },
                                            "flags": 16,
                                            "start": 87,
                                            "end": 106
                                        }
                                    ],
                                    "flags": 17,
                                    "start": 87,
                                    "end": 106
                                },
                                "flags": 16,
                                "start": 85,
                                "end": 110
                            },
                            "flags": 32,
                            "start": 76,
                            "end": 110
                        }
                    ],
                    "flags": 32,
                    "start": 76,
                    "end": 110
                },
                "flags": 32,
                "start": 74,
                "end": 112
            },
            "flags": 16,
            "start": 0,
            "end": 112
        }
    ],
    "isModule": false,
    "source": "// BindingIdentifier may not be `await` within class static blocks\nclass C {\n  static {\n    class await {}\n  }\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 112
}
```

### Printed

```javascript
// BindingIdentifier may not be `await` within class static blocks

class C {
  import ;
}
```

### Diagnostics

```javascript
✔ No errors
```

