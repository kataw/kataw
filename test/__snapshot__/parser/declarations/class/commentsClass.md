# Kataw parser test case

## Input

`````js

class x {
  y
}


`````

## Options

### Parser Options

`````js
{ allowTypes : false }
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
                "flags": 81,
                "start": 0,
                "end": 6
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 6,
                "end": 8
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
                            "staticToken": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 96,
                                "start": 10,
                                "end": 14
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 32,
                            "start": 10,
                            "end": 14
                        }
                    ],
                    "flags": 32,
                    "start": 10,
                    "end": 14
                },
                "flags": 8,
                "start": 32,
                "end": 16
            },
            "flags": 17,
            "start": 0,
            "end": 16
        }
    ],
    "isModule": false,
    "source": "\nclass x {\n  y\n}\n\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 18
}
```

### Printed

```javascript

 class x {
    y
} 
```

### Diagnostics

```javascript
✔ No errors
```

