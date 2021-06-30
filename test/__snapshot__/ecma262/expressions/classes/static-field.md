# Kataw parser test case

## Input

`````js
class {

      static field = foo;


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
            "name": null,
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
                            "staticKeyword": {
                                "kind": 8388716,
                                "flags": 64,
                                "start": 7,
                                "end": 21
                            },
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "field",
                                "rawText": "field",
                                "flags": 96,
                                "start": 21,
                                "end": 27
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": {
                                "kind": 134299649,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 96,
                                "start": 29,
                                "end": 33
                            },
                            "flags": 32,
                            "start": 21,
                            "end": 33
                        },
                        {
                            "kind": 1108353041,
                            "flags": 64,
                            "start": 33,
                            "end": 34
                        }
                    ],
                    "flags": 32,
                    "start": 7,
                    "end": 34
                },
                "flags": 5,
                "start": 32,
                "end": 38
            },
            "flags": 16,
            "start": 0,
            "end": 38
        }
    ],
    "isModule": false,
    "source": "class {\n\n      static field = foo;\n\n\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 38
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ A class declaration without the 'default' modifier must have a name. - start: 5, end: 7

```

