# Kataw parser test case

## Input

`````js
class Foo { static x = this }
`````

## Options

### Parser Options

`````js
{ allowTypes : true }
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
                "text": "Foo",
                "rawText": "Foo",
                "flags": 96,
                "start": 5,
                "end": 9
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 262,
                    "elements": [
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticToken": {
                                "kind": 8388716,
                                "flags": 64,
                                "start": 11,
                                "end": 18
                            },
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 18,
                                "end": 20
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": {
                                "kind": 4276321,
                                "flags": 96,
                                "start": 22,
                                "end": 27
                            },
                            "flags": 32,
                            "start": 18,
                            "end": 27
                        }
                    ],
                    "flags": 32,
                    "start": 11,
                    "end": 27
                },
                "flags": 9,
                "start": 32,
                "end": 29
            },
            "flags": 16,
            "start": 0,
            "end": 29
        }
    ],
    "isModule": false,
    "source": "class Foo { static x = this }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 29
}
```

### Printed

```javascript

class Foo {
  static x = this;
}
```

### Diagnostics

```javascript
✔ No errors
```

