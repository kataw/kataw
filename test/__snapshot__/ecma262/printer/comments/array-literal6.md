# Kataw parser test case

## Input

`````js
 [


   /*1*/

   a,
   /*2*/b/*3*/=/*4*/c, , , /*5*/]

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
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 97,
                            "start": 2,
                            "end": 19
                        },
                        {
                            "kind": 125,
                            "left": {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 97,
                                "start": 20,
                                "end": 30
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 96,
                                "start": 30,
                                "end": 36
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "c",
                                "rawText": "c",
                                "flags": 96,
                                "start": 36,
                                "end": 42
                            },
                            "flags": 32,
                            "start": 20,
                            "end": 42
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 43,
                            "end": 43
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 45,
                            "end": 45
                        }
                    ],
                    "trailingComma": true,
                    "flags": 33,
                    "start": 2,
                    "end": 47
                },
                "flags": 32,
                "start": 0,
                "end": 54
            },
            "flags": 16,
            "start": 0,
            "end": 54
        }
    ],
    "isModule": false,
    "source": " [\n\n\n   /*1*/\n\n   a,\n   /*2*/b/*3*/=/*4*/c, , , /*5*/]\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 55
}
```

### Printed

```javascript

[
   /*1*/
  a,
   /*2*/b/*3*/ =/*4*/ c,
  ,
  ,/*5*/
];

```

### Diagnostics

```javascript
✔ No errors
```

