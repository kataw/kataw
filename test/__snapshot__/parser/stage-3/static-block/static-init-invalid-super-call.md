# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, next: true }
`````

## Input

`````js
class C {
  static {
    super();
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
                "flags": 0,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "C",
                "rawText": "C",
                "flags": 96,
                "start": 5,
                "end": 7
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
                                            "kind": 120,
                                            "expression": {
                                                "kind": 131,
                                                "expression": {
                                                    "kind": 225,
                                                    "superKeyword": {
                                                        "kind": 4259935,
                                                        "flags": 1,
                                                        "start": 20,
                                                        "end": 30
                                                    },
                                                    "flags": 96,
                                                    "start": 20,
                                                    "end": 30
                                                },
                                                "argumentList": {
                                                    "kind": 256,
                                                    "elements": [],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "start": 31,
                                                    "end": 31
                                                },
                                                "flags": 268435488,
                                                "start": 20,
                                                "end": 32
                                            },
                                            "flags": 16,
                                            "start": 20,
                                            "end": 33
                                        }
                                    ],
                                    "flags": 17,
                                    "start": 20,
                                    "end": 33
                                },
                                "flags": 16,
                                "start": 9,
                                "end": 37
                            },
                            "flags": 32,
                            "start": 9,
                            "end": 37
                        }
                    ],
                    "flags": 32,
                    "start": 9,
                    "end": 37
                },
                "flags": 7,
                "start": 32,
                "end": 39
            },
            "flags": 16,
            "start": 0,
            "end": 39
        }
    ],
    "isModule": false,
    "source": "class C {\n  static {\n    super();\n  }\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 39
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'super' can only be referenced in members of derived classes or object literal expressions - start: 20, end: 31

```

