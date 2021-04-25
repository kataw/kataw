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
                "text": "Foo",
                "rawText": "Foo",
                "flags": 768,
                "start": 5,
                "end": 9
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
                            "kind": 134299649,
                            "text": "prop1",
                            "rawText": "prop1",
                            "flags": 768,
                            "start": 11,
                            "end": 17
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 134234347,
                                "flags": 768,
                                "start": 18,
                                "end": 24
                            },
                            "flags": 0,
                            "start": 17,
                            "end": 24
                        },
                        "initializer": null,
                        "flags": 256,
                        "start": 11,
                        "end": 24
                    },
                    {
                        "kind": 281,
                        "flags": 768,
                        "start": 24,
                        "end": 25
                    },
                    {
                        "kind": 280,
                        "decorators": null,
                        "declaredToken": null,
                        "staticToken": null,
                        "asyncKeyword": null,
                        "key": {
                            "kind": 134299649,
                            "text": "prop2",
                            "rawText": "prop2",
                            "flags": 768,
                            "start": 25,
                            "end": 31
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 134234345,
                                "flags": 768,
                                "start": 32,
                                "end": 38
                            },
                            "flags": 0,
                            "start": 31,
                            "end": 38
                        },
                        "initializer": null,
                        "flags": 256,
                        "start": 25,
                        "end": 38
                    },
                    {
                        "kind": 281,
                        "flags": 768,
                        "start": 38,
                        "end": 39
                    }
                ],
                "flags": 256,
                "start": 11,
                "end": 41
            },
            "flags": 128,
            "start": 0,
            "end": 41
        }
    ],
    "isModule": false,
    "text": "class Foo { prop1:string; prop2:number; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 41
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2714}@ No errors
```

