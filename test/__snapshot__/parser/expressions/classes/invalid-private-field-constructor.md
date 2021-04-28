# Kataw parser test case

## Input

`````js
class C { #constructor }

class C { static #constructor }
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
                "flags": 0,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "C",
                "rawText": "C",
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
                        "staticToken": null,
                        "asyncKeyword": null,
                        "key": {
                            "kind": 67109115,
                            "text": "#constructor",
                            "flags": 768,
                            "start": 9,
                            "end": 22
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 256,
                        "start": 9,
                        "end": 22
                    }
                ],
                "flags": 256,
                "start": 9,
                "end": 24
            },
            "flags": 128,
            "start": 0,
            "end": 24
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 1,
                "start": 24,
                "end": 31
            },
            "name": {
                "kind": 134299649,
                "text": "C",
                "rawText": "C",
                "flags": 768,
                "start": 31,
                "end": 33
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
                            "flags": 512,
                            "start": 35,
                            "end": 42
                        },
                        "asyncKeyword": null,
                        "key": {
                            "kind": 67109115,
                            "text": "#constructor",
                            "flags": 768,
                            "start": 42,
                            "end": 55
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 256,
                        "start": 42,
                        "end": 55
                    }
                ],
                "flags": 256,
                "start": 35,
                "end": 57
            },
            "flags": 128,
            "start": 24,
            "end": 57
        }
    ],
    "isModule": false,
    "text": "class C { #constructor }\n\nclass C { static #constructor }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 57
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ '#constructor' is a reserved word. - start: 9, end: 11
✖ '#constructor' is a reserved word. - start: 42, end: 44

```

