# Kataw parser test case

## Input

`````js
class C { #aaa; #bbb }

class C { #aaa
 #bbb }
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
                            "text": "#aaa",
                            "flags": 768,
                            "start": 9,
                            "end": 14
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 256,
                        "start": 9,
                        "end": 14
                    },
                    {
                        "kind": 281,
                        "flags": 768,
                        "start": 14,
                        "end": 15
                    },
                    {
                        "kind": 280,
                        "decorators": null,
                        "declaredToken": null,
                        "staticToken": null,
                        "asyncKeyword": null,
                        "key": {
                            "kind": 67109115,
                            "text": "#bbb",
                            "flags": 768,
                            "start": 15,
                            "end": 20
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 256,
                        "start": 15,
                        "end": 20
                    }
                ],
                "flags": 256,
                "start": 9,
                "end": 22
            },
            "flags": 128,
            "start": 0,
            "end": 22
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 22,
                "start": 1,
                "end": 29
            },
            "name": {
                "kind": 134299649,
                "text": "C",
                "rawText": "C",
                "flags": 768,
                "start": 29,
                "end": 31
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
                            "text": "#aaa",
                            "flags": 768,
                            "start": 33,
                            "end": 38
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 256,
                        "start": 33,
                        "end": 38
                    },
                    {
                        "kind": 280,
                        "decorators": null,
                        "declaredToken": null,
                        "staticToken": null,
                        "asyncKeyword": null,
                        "key": {
                            "kind": 67109115,
                            "text": "#bbb",
                            "flags": 768,
                            "start": 38,
                            "end": 44
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 256,
                        "start": 38,
                        "end": 44
                    }
                ],
                "flags": 256,
                "start": 33,
                "end": 46
            },
            "flags": 128,
            "start": 22,
            "end": 46
        }
    ],
    "isModule": false,
    "text": "class C { #aaa; #bbb }\n\nclass C { #aaa\n #bbb }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 46
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

