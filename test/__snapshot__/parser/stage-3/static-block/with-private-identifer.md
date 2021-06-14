# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, next: true }
`````

## Input

`````js
class C {
  static #x = 1;

  static {
    C.#x;
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
                    "kind": 303,
                    "elements": [
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticToken": {
                                "kind": 8388716,
                                "flags": 64,
                                "start": 9,
                                "end": 18
                            },
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "#x",
                                "rawText": "#x",
                                "flags": 96,
                                "start": 18,
                                "end": 21
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "start": 23,
                                "end": 25
                            },
                            "flags": 32,
                            "start": 18,
                            "end": 25
                        },
                        {
                            "kind": 317,
                            "flags": 96,
                            "start": 25,
                            "end": 26
                        },
                        {
                            "kind": 305,
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
                                                "kind": 129,
                                                "member": {
                                                    "kind": 134299649,
                                                    "text": "C",
                                                    "rawText": "C",
                                                    "flags": 96,
                                                    "start": 38,
                                                    "end": 44
                                                },
                                                "expression": {
                                                    "kind": 67191035,
                                                    "text": "#x",
                                                    "flags": 96,
                                                    "start": 45,
                                                    "end": 47
                                                },
                                                "flags": 536870944,
                                                "start": 38,
                                                "end": 47
                                            },
                                            "flags": 16,
                                            "start": 38,
                                            "end": 48
                                        }
                                    ],
                                    "flags": 17,
                                    "start": 38,
                                    "end": 48
                                },
                                "flags": 26,
                                "start": 0,
                                "end": 52
                            },
                            "flags": 32,
                            "start": 26,
                            "end": 52
                        }
                    ],
                    "flags": 32,
                    "start": 9,
                    "end": 52
                },
                "flags": 7,
                "start": 32,
                "end": 54
            },
            "flags": 16,
            "start": 0,
            "end": 54
        }
    ],
    "isModule": false,
    "source": "class C {\n  static #x = 1;\n\n  static {\n    C.#x;\n  }\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 54
}
```

### Printed

```javascript

class C {
  static #x = 1;


}
```

### Diagnostics

```javascript
✔ No errors
```

