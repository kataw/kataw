# Kataw parser test case

## Input

`````js
let x: 1n;
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
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 3,
                            "end": 5
                        },
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 286,
                                "text": "1",
                                "raw": "1n",
                                "flags": 2097216,
                                "start": 6,
                                "end": 9
                            },
                            "flags": 2097152,
                            "start": 6,
                            "end": 9
                        },
                        "initializer": null,
                        "flags": 16,
                        "start": 3,
                        "end": 9
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 9
            },
            "flags": 33554448,
            "start": 0,
            "end": 10
        }
    ],
    "isModule": false,
    "source": "let x: 1n;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 10
}
```

### Printed

```javascript

 let x ; 
```

### Diagnostics

```javascript
✔ No errors
```

