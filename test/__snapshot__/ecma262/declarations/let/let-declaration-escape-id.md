# Kataw parser test case

## Input

`````js
let \u0275ResourceLoaderImpl_BaseFactory
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "ɵResourceLoaderImpl_BaseFactory",
                            "rawText": "\\u0275ResourceLoaderImpl_BaseFactory",
                            "flags": 96,
                            "start": 3,
                            "end": 40
                        },
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 3,
                        "end": 40
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 40
            },
            "flags": 33554448,
            "start": 0,
            "end": 40
        }
    ],
    "isModule": false,
    "source": "let \\u0275ResourceLoaderImpl_BaseFactory",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 40
}
```

### Printed

```javascript

let ɵResourceLoaderImpl_BaseFactory;
```

### Diagnostics

```javascript
✔ No errors
```

