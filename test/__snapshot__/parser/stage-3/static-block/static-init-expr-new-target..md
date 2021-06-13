# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, next: true }
`````

## Input

`````js
class C {
  static {
    value = new.target;
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
                "flags": 80,
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
                                                "kind": 125,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "value",
                                                    "rawText": "value",
                                                    "flags": 96,
                                                    "start": 20,
                                                    "end": 30
                                                },
                                                "operatorToken": {
                                                    "kind": 4125,
                                                    "flags": 96,
                                                    "start": 30,
                                                    "end": 32
                                                },
                                                "right": {
                                                    "kind": 211,
                                                    "newKeyword": {
                                                        "kind": 138477661,
                                                        "flags": 96,
                                                        "start": 32,
                                                        "end": 36
                                                    },
                                                    "targetIdentifier": {
                                                        "kind": 16594,
                                                        "flags": 96,
                                                        "start": 37,
                                                        "end": 43
                                                    },
                                                    "flags": 96,
                                                    "start": 32,
                                                    "end": 43
                                                },
                                                "flags": 32,
                                                "start": 20,
                                                "end": 43
                                            },
                                            "flags": 16,
                                            "start": 20,
                                            "end": 44
                                        }
                                    ],
                                    "flags": 17,
                                    "start": 20,
                                    "end": 44
                                },
                                "flags": 9,
                                "start": 0,
                                "end": 48
                            },
                            "flags": 32,
                            "start": 9,
                            "end": 48
                        }
                    ],
                    "flags": 32,
                    "start": 9,
                    "end": 48
                },
                "flags": 7,
                "start": 32,
                "end": 50
            },
            "flags": 16,
            "start": 0,
            "end": 50
        }
    ],
    "isModule": false,
    "source": "class C {\n  static {\n    value = new.target;\n  }\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 50
}
```

### Printed

```javascript

class C {
   ;
}
```

### Diagnostics

```javascript
✔ No errors
```

