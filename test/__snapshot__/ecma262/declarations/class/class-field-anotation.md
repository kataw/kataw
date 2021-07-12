# Kataw parser test case

## Input

`````js
class Foo { prop1:string; prop2:number; }
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
                                "text": "prop1",
                                "rawText": "prop1",
                                "flags": 96,
                                "start": 11,
                                "end": 17
                            },
                            "optionalToken": null,
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134234347,
                                    "flags": 2097216,
                                    "start": 18,
                                    "end": 24
                                },
                                "flags": 2097152,
                                "start": 18,
                                "end": 24
                            },
                            "initializer": null,
                            "flags": 32,
                            "start": 11,
                            "end": 24
                        },
                        {
                            "kind": 1108353041,
                            "flags": 64,
                            "start": 24,
                            "end": 25
                        },
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "prop2",
                                "rawText": "prop2",
                                "flags": 96,
                                "start": 25,
                                "end": 31
                            },
                            "optionalToken": null,
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134234345,
                                    "flags": 2097216,
                                    "start": 32,
                                    "end": 38
                                },
                                "flags": 2097152,
                                "start": 32,
                                "end": 38
                            },
                            "initializer": null,
                            "flags": 32,
                            "start": 25,
                            "end": 38
                        },
                        {
                            "kind": 1108353041,
                            "flags": 64,
                            "start": 38,
                            "end": 39
                        }
                    ],
                    "flags": 32,
                    "start": 11,
                    "end": 39
                },
                "flags": 9,
                "start": 32,
                "end": 41
            },
            "flags": 16,
            "start": 0,
            "end": 41
        }
    ],
    "isModule": false,
    "source": "class Foo { prop1:string; prop2:number; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 41
}
```

### Printed

```javascript

  class Foo {
    prop1: string
    ;
    prop2: number
    ;
  }

```

### Diagnostics

```javascript
✔ No errors
```

