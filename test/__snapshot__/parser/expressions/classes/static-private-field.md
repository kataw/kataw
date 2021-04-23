# Kataw parser test case

## Input

`````js
class A {
  static #private; }

  class A {
  static #private = x; }
`````

## Output

### Hybrid CST

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
                "flags": 768,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "A",
                "rawText": "A",
                "flags": 768,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "classHeritage": null,
            "members": {
                "kind": 277,
                "elements": [
                    {
                        "kind": 280,
                        "decorators": null,
                        "declaredToken": null,
                        "staticToken": {
                            "kind": 8388716,
                            "flags": 768,
                            "start": 9,
                            "end": 18
                        },
                        "asyncKeyword": null,
                        "key": {
                            "kind": 67109115,
                            "text": "#private",
                            "flags": 768,
                            "start": 18,
                            "end": 27
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 256,
                        "start": 18,
                        "end": 27
                    },
                    {
                        "kind": 281,
                        "flags": 768,
                        "start": 27,
                        "end": 28
                    }
                ],
                "flags": 256,
                "start": 9,
                "end": 30
            },
            "flags": 128,
            "start": 0,
            "end": 30
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 768,
                "start": 30,
                "end": 39
            },
            "name": {
                "kind": 134299649,
                "text": "A",
                "rawText": "A",
                "flags": 768,
                "start": 39,
                "end": 41
            },
            "typeParameters": null,
            "classHeritage": null,
            "members": {
                "kind": 277,
                "elements": [
                    {
                        "kind": 280,
                        "decorators": null,
                        "declaredToken": null,
                        "staticToken": {
                            "kind": 8388716,
                            "flags": 768,
                            "start": 43,
                            "end": 52
                        },
                        "asyncKeyword": null,
                        "key": {
                            "kind": 67109115,
                            "text": "#private",
                            "flags": 768,
                            "start": 52,
                            "end": 61
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 63,
                            "end": 65
                        },
                        "flags": 256,
                        "start": 52,
                        "end": 65
                    },
                    {
                        "kind": 281,
                        "flags": 768,
                        "start": 65,
                        "end": 66
                    }
                ],
                "flags": 256,
                "start": 43,
                "end": 68
            },
            "flags": 128,
            "start": 30,
            "end": 68
        }
    ],
    "isModule": false,
    "text": "class A {\n  static #private; }\n\n  class A {\n  static #private = x; }",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 68
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

