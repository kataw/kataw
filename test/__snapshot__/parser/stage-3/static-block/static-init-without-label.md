# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, next: true }
`````

## Input

`````js
label: while(false) {
  class C {
    static {
      break;
    }
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
            "kind": 163,
            "label": {
                "kind": 134299649,
                "text": "label",
                "rawText": "label",
                "flags": 96,
                "start": 0,
                "end": 5
            },
            "labels": [
                {
                    "kind": 256,
                    "label": "label",
                    "iterationStatement": false,
                    "flags": 16,
                    "start": 0,
                    "end": 5
                }
            ],
            "colonToken": {
                "kind": 21,
                "flags": 0,
                "start": 5,
                "end": 6
            },
            "statement": {
                "kind": 154,
                "whileKeyword": {
                    "kind": 37757028,
                    "flags": 0,
                    "start": 6,
                    "end": 12
                },
                "expression": {
                    "kind": 134,
                    "text": false,
                    "flags": 96,
                    "start": 13,
                    "end": 18
                },
                "statement": {
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
                                    "start": 21,
                                    "end": 29
                                },
                                "name": {
                                    "kind": 134299649,
                                    "text": "C",
                                    "rawText": "C",
                                    "flags": 96,
                                    "start": 29,
                                    "end": 31
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
                                                                "kind": 150,
                                                                "breakKeyword": {
                                                                    "kind": 37757005,
                                                                    "flags": 1,
                                                                    "start": 46,
                                                                    "end": 58
                                                                },
                                                                "label": null,
                                                                "flags": 16,
                                                                "start": 46,
                                                                "end": 59
                                                            }
                                                        ],
                                                        "flags": 17,
                                                        "start": 46,
                                                        "end": 59
                                                    },
                                                    "flags": 16,
                                                    "start": 33,
                                                    "end": 65
                                                },
                                                "flags": 32,
                                                "start": 33,
                                                "end": 65
                                            }
                                        ],
                                        "flags": 32,
                                        "start": 33,
                                        "end": 65
                                    },
                                    "flags": 32,
                                    "start": 31,
                                    "end": 69
                                },
                                "flags": 16,
                                "start": 21,
                                "end": 69
                            }
                        ],
                        "flags": 17,
                        "start": 21,
                        "end": 69
                    },
                    "flags": 16,
                    "start": 19,
                    "end": 71
                },
                "flags": 16,
                "start": 6,
                "end": 71
            },
            "flags": 16,
            "start": 0,
            "end": 71
        }
    ],
    "isModule": false,
    "source": "label: while(false) {\n  class C {\n    static {\n      break;\n    }\n  }\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 71
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ A 'break' statement can only be used within an enclosing iteration or switch statement. - start: 58, end: 59

```

