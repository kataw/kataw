# Kataw parser test case

## Input

`````js
class A {; ;; ;}
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
                    "kind": 303,
                    "elements": [
                        {
                            "kind": 317,
                            "flags": 96,
                            "start": 9,
                            "end": 10
                        },
                        {
                            "kind": 317,
                            "flags": 96,
                            "start": 10,
                            "end": 12
                        },
                        {
                            "kind": 317,
                            "flags": 96,
                            "start": 12,
                            "end": 13
                        },
                        {
                            "kind": 317,
                            "flags": 96,
                            "start": 13,
                            "end": 15
                        }
                    ],
                    "flags": 32,
                    "start": 9,
                    "end": 15
                },
                "flags": 7,
                "start": 32,
                "end": 16
            },
            "flags": 16,
            "start": 0,
            "end": 16
        }
    ],
    "isModule": false,
    "source": "class A {; ;; ;}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 16
}
```

### Printed

```javascript

 class A {
    ,
    ,
    ,
} 
```

### Diagnostics

```javascript
✔ No errors
```

