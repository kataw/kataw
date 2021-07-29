# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true, allowTypes: true }
`````


## Input

`````js
class Properties { get: string; }
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
                "text": "Properties",
                "rawText": "Properties",
                "flags": 96,
                "transformFlags": 0,
                "start": 5,
                "end": 16
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
                                "text": "get",
                                "rawText": "get",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 18,
                                "end": 22
                            },
                            "optionalToken": null,
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134234347,
                                    "flags": 2097216,
                                    "transformFlags": 0,
                                    "start": 23,
                                    "end": 30
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 23,
                                "end": 30
                            },
                            "initializer": null,
                            "flags": 32,
                            "transformFlags": 128,
                            "start": 18,
                            "end": 30
                        },
                        {
                            "kind": 1108353041,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 30,
                            "end": 31
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 18,
                    "end": 31
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 32,
                "end": 33
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 33
        }
    ],
    "isModule": false,
    "source": "class Properties { get: string; }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 33
}
```

### Printed

```javascript

class Properties {
    get: string
    ;
}

```

### Diagnostics

```javascript
✔ No errors
```

