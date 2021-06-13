# Kataw parser test case

## Input

`````js
class A {
  declare: string
}
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
                "text": "A",
                "rawText": "A",
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
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticToken": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "declare",
                                "rawText": "declare",
                                "flags": 96,
                                "start": 9,
                                "end": 19
                            },
                            "optionalToken": null,
                            "type": {
                                "kind": 139,
                                "type": {
                                    "kind": 134234347,
                                    "flags": 2097216,
                                    "start": 20,
                                    "end": 27
                                },
                                "flags": 2097152,
                                "start": 19,
                                "end": 27
                            },
                            "initializer": null,
                            "flags": 32,
                            "start": 9,
                            "end": 27
                        }
                    ],
                    "flags": 32,
                    "start": 9,
                    "end": 27
                },
                "flags": 7,
                "start": 32,
                "end": 29
            },
            "flags": 16,
            "start": 0,
            "end": 29
        }
    ],
    "isModule": false,
    "source": "class A {\n  declare: string\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 29
}
```

### Printed

```javascript

class A {
  declare;
}
```

### Diagnostics

```javascript
✔ No errors
```

