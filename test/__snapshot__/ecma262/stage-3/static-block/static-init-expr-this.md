# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, next: true }
`````

## Input

`````js
class C {
  static {
    value = this;
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
                "transformFlags": 0,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "C",
                "rawText": "C",
                "flags": 96,
                "transformFlags": 0,
                "start": 5,
                "end": 7
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
                                "start": 9,
                                "end": 18
                            },
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
                                                    "flags": 97,
                                                    "transformFlags": 0,
                                                    "start": 20,
                                                    "end": 30
                                                },
                                                "operatorToken": {
                                                    "kind": 4125,
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 30,
                                                    "end": 32
                                                },
                                                "right": {
                                                    "kind": 4276321,
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 32,
                                                    "end": 37
                                                },
                                                "flags": 0,
                                                "transformFlags": 128,
                                                "start": 20,
                                                "end": 37
                                            },
                                            "flags": 16,
                                            "transformFlags": 4096,
                                            "start": 20,
                                            "end": 38
                                        }
                                    ],
                                    "flags": 17,
                                    "transformFlags": 0,
                                    "start": 20,
                                    "end": 38
                                },
                                "flags": 9,
                                "transformFlags": 0,
                                "start": 0,
                                "end": 42
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 9,
                            "end": 42
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 42
                },
                "flags": 7,
                "transformFlags": 0,
                "start": 32,
                "end": 44
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 44
        }
    ],
    "isModule": false,
    "source": "class C {\n  static {\n    value = this;\n  }\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 44
}
```

### Printed

```javascript
class C {

}
```

### Diagnostics

```javascript
✔ No errors
```

