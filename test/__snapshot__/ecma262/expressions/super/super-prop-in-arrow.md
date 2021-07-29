# Kataw parser test case

## Input

`````js
class C {
  x = () => super.prop
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
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 9,
                                "end": 13
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": {
                                "kind": 271,
                                "asyncKeyword": null,
                                "typeParameters": null,
                                "arrowPatameterList": {
                                    "kind": 342,
                                    "parameters": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 17,
                                    "end": 17
                                },
                                "returnType": null,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 18,
                                    "end": 21
                                },
                                "contents": {
                                    "kind": 129,
                                    "member": {
                                        "kind": 4259935,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 21,
                                        "end": 27
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "prop",
                                        "rawText": "prop",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 28,
                                        "end": 32
                                    },
                                    "flags": 96,
                                    "transformFlags": 2,
                                    "start": 21,
                                    "end": 32
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 15,
                                "end": 32
                            },
                            "flags": 32,
                            "transformFlags": 128,
                            "start": 9,
                            "end": 32
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 32
                },
                "flags": 7,
                "transformFlags": 0,
                "start": 32,
                "end": 34
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 34
        }
    ],
    "isModule": false,
    "source": "class C {\n  x = () => super.prop\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 34
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'super' can only be referenced in members of derived classes or object literal expressions - start: 21, end: 28

```

