# Kataw parser test case

## Input

`````js
x = class { static x = class { [this.y] } }
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
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 1,
                    "end": 3
                },
                "right": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 64,
                        "start": 3,
                        "end": 9
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
                                        "kind": 189,
                                        "decorators": null,
                                        "classKeyword": {
                                            "kind": 37822544,
                                            "flags": 64,
                                            "start": 22,
                                            "end": 28
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
                                                        "staticKeyword": null,
                                                        "asyncKeyword": null,
                                                        "key": {
                                                            "kind": 194,
                                                            "expression": {
                                                                "kind": 129,
                                                                "member": {
                                                                    "kind": 4276321,
                                                                    "flags": 96,
                                                                    "start": 32,
                                                                    "end": 36
                                                                },
                                                                "expression": {
                                                                    "kind": 134299649,
                                                                    "text": "y",
                                                                    "rawText": "y",
                                                                    "flags": 96,
                                                                    "start": 37,
                                                                    "end": 38
                                                                },
                                                                "flags": 96,
                                                                "start": 32,
                                                                "end": 38
                                                            },
                                                            "flags": 32,
                                                            "start": 30,
                                                            "end": 39
                                                        },
                                                        "optionalToken": null,
                                                        "type": null,
                                                        "initializer": null,
                                                        "flags": 32,
                                                        "start": 30,
                                                        "end": 39
                                                    }
                                                ],
                                                "flags": 32,
                                                "start": 30,
                                                "end": 39
                                            },
                                            "flags": 28,
                                            "start": 32,
                                            "end": 41
                                        },
                                        "flags": 32,
                                        "start": 22,
                                        "end": 41
                                    },
                                    "flags": 32,
                                    "start": 18,
                                    "end": 41
                                }
                            ],
                            "flags": 32,
                            "start": 11,
                            "end": 41
                        },
                        "flags": 9,
                        "start": 32,
                        "end": 43
                    },
                    "flags": 32,
                    "start": 3,
                    "end": 43
                },
                "flags": 32,
                "start": 0,
                "end": 43
            },
            "flags": 16,
            "start": 0,
            "end": 43
        }
    ],
    "isModule": false,
    "source": "x = class { static x = class { [this.y] } }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 43
}
```

### Printed

```javascript

x = class  {
  x = class  {
      [this.y];
    };
};
```

### Diagnostics

```javascript
✔ No errors
```

