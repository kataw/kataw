# Kataw parser test case

## Input

`````js
type Age = typeof MyArray[number]["age"];
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
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 0,
                "end": 8
            },
            "name": {
                "kind": 134299649,
                "text": "Age",
                "rawText": "Age",
                "flags": 96,
                "start": 4,
                "end": 8
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "start": 8,
                "end": 10
            },
            "type": {
                "kind": 268,
                "objectType": {
                    "kind": 268,
                    "objectType": {
                        "kind": 134299891,
                        "typeOfKeyword": {
                            "kind": 138477613,
                            "flags": 64,
                            "start": 10,
                            "end": 17
                        },
                        "type": {
                            "kind": 144,
                            "id": {
                                "kind": 134299649,
                                "text": "MyArray",
                                "rawText": "MyArray",
                                "flags": 96,
                                "start": 17,
                                "end": 25
                            },
                            "typeParameters": null,
                            "flags": 32,
                            "start": 17,
                            "end": 25
                        },
                        "flags": 96,
                        "start": 10,
                        "end": 25
                    },
                    "indexType": {
                        "kind": 134234345,
                        "flags": 64,
                        "start": 26,
                        "end": 32
                    },
                    "flags": 0,
                    "start": 26,
                    "end": 34
                },
                "indexType": {
                    "kind": 134217967,
                    "value": "age",
                    "flags": 96,
                    "start": 34,
                    "end": 39
                },
                "flags": 0,
                "start": 34,
                "end": 41
            },
            "flags": 16,
            "start": 0,
            "end": 41
        }
    ],
    "isModule": false,
    "source": "type Age = typeof MyArray[number][\"age\"];",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 41
}
```

### Printed

```javascript


```

### Diagnostics

```javascript
✔ No errors
```

